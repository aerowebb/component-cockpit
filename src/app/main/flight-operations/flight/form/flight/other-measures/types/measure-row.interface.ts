import { BidoFlightMeasureDTO } from '../../../../../../../shared/types/api-types/bido-flight-measure-dto.interface';
import { BireMeasureReferenceDTO } from '../../../../../../../shared/types/api-types/bire-measure-reference-dto.interface';

export interface MeasureRow {
  code: string;
  description: string;
  value: string;
  uom: string;
  _flightMeasure: BidoFlightMeasureDTO | undefined;
  _measureReference: BireMeasureReferenceDTO | undefined;
}
