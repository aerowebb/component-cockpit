export interface FlightTimeDTO {
  id?: number;
  timeType?: string;
  timeStartDate?: Date;
  timeStartDateOffset?: number;
  timeEndDate?: Date;
  timeEndDateOffset?: number;
  duration?: string;
}
