export interface ResourceModel {
  id: string;
  children: ResourceModel[];
  width?: number;
}
