export interface BsdeAvailabilityDTO {
  availabilityId?: string;
  projectId?: string;
  availabilityType?: string;
  availabilityCode?: string;
  availabilityStartDate?: Date;
  availabilityEndDate?: Date;
  isUnavailable?: number;
  availabilityPerWeek: number;
  availabilityPerWeekEnd: number;
}
