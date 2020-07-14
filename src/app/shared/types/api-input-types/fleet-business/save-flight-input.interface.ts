import { FlightDTO } from '../../api-types/flight-dto.interface';

export interface SaveFlightInput {
  flight: FlightDTO;
  assetCode: string;
  timezone: string | undefined;
  previousAssetCode?: string;
  customerOperatorCode?: string;
}
