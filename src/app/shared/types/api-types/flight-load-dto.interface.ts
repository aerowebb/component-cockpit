import { FlightLoadCategoryDTO } from './flight-load-category-dto.interface';
import { FlightUnitOfMeasureDTO } from './flight-unit-of-measure-dto.interface';

export interface FlightLoadDTO {
  id?: string;
  loadCategory?: FlightLoadCategoryDTO;
  value?: number;
  uom?: FlightUnitOfMeasureDTO;
}
