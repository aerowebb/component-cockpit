import { MeasureProgressUIDTO } from '../../api-output-types/install-asset/measure-progress-ui-dto.interface';
import { BidoEquipmentEvolutionDTO } from '../../api-types/bido-equipment-evolution-dto.interface';
import { EventInformationsDTO } from '../../api-types/event-informations-dto.interface';

export interface DismantleEquipmentInput {
  equipmentCode?: string[];
  equipmentCodeFather?: string;
  newOperationalStatus?: string;
  newAircraftStatus?: string;
  cancelMeasuresSinceEventDate?: boolean;
  informationsDTO: EventInformationsDTO;
  engineRemoval?: boolean;
  specificSNEnabled?: boolean;
  updateEvolutions?: boolean;
  resetCounters?: boolean;
  measuresToCancel?: MeasureProgressUIDTO[];
  updateBidoEquipmentEvolutionDTOList?: BidoEquipmentEvolutionDTO[];
  newBidoEquipmentEvolutionDTOList?: BidoEquipmentEvolutionDTO[];
}
