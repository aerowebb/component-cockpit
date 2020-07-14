import { AssetFleetDataCopyInputDTO } from '../../api-input-types/fleet-management/asset-fleet-data-copy-input-dto.interface';
import { EvolutionFleetDataCopyInputDTO } from '../../api-input-types/fleet-management/evolution-fleet-data-copy-input-dto.interface';

export interface FleetDataCopyInputDTO {
  assetFleetDataCopyInputDTO?: AssetFleetDataCopyInputDTO;
  evolutionFleetDataCopyInputDTO?: EvolutionFleetDataCopyInputDTO;
  isEvolutionSelected?: boolean;
  withCounters?: boolean;
}
