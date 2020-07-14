export interface UsersForWorkOrderInput {
  useCaseCode: string;
  taskCode?: string;
  taskVersion?: string;
  projectId?: string;
  startDate?: Date;
}
