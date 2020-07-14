import { BidoEquipmentDTOId } from '../../api-types/bido-equipment-dto-id.interface';
import { BirePlanTaskCounterDTO } from '../../api-types/bire-plan-task-counter-dto.interface';
import { BireTaskDTO } from '../../api-types/bire-task-dto.interface';

export interface BaseMaintenancePlanStructureOutput {
  bidoEquipmentDTOId: BidoEquipmentDTOId;
  birePlanTaskCounterDTO: BirePlanTaskCounterDTO;
  bireTaskDTO: BireTaskDTO;
  assetText: string;
  visitCode?: string;
  visitVersion?: string;
  missingCounter?: string;
  conf?: string;
  status?: string;
  nextTerm?: string;
  periodicitiesText?: string;
  remainingEquivalent?: string;
  groupingCode?: string;
  children?: BaseMaintenancePlanStructureOutput[];
}
