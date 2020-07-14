export interface CustomBidtLaborTemplateDTO {
  ltName?: string;
  ltDayPerWeek?: number;
  ltHourPerWeek?: number;
  ltIsMonday?: number;
  ltIsTuesday?: number;
  ltIsWednesday?: number;
  ltIsThursday?: number;
  ltIsFriday?: number;
  ltIsSaturday?: number;
  ltIsSunday?: number;
  ltNbHourWd?: number;
  gltNbHourWd?: string;
  ltNbHourWe?: number;
  gltNbHourWe?: string;
  statusState?: string;
  statusUser?: string;
  statusDate?: Date;
  id?: number;
  ltIsMondayBool?: boolean;
  ltIsTuesdayBool?: boolean;
  ltIsWednesdayBool?: boolean;
  ltIsThursdayBool?: boolean;
  ltIsFridayBool?: boolean;
  ltIsSaturdayBool?: boolean;
  ltIsSundayBool?: boolean;
}
