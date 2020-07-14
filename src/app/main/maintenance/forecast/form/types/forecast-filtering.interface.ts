import { UpcomingEventStatus } from '../forecast-form.service';

export interface ForecastFiltering {
  globalSearch: string;
  upcomingEventStatusList: UpcomingEventStatus[];
  upcomingEventTypeList: string[];
  workPackageStatusList: string[];
}
