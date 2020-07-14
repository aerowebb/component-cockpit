export interface EventModel {
  endDate?: Date | undefined;
  eventType: string;
  id: number;
  resourceId: string;
  startDate: Date;

  cls?: string;
  draggable?: boolean;
  eventColor?: string;
  eventStyle?: string;
  iconCls?: string;
  maxEndDate?: Date | number;
  maxStartDate?: Date | number;
  name?: string;
  resizable?: boolean;
}
