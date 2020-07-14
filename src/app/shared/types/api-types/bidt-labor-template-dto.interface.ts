export interface BidtLaborTemplateDTO {
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
  ltNbHourWe?: number;
  statusState?: string;
  statusUser?: string;
  statusDate?: Date;
  id?: number;
}
