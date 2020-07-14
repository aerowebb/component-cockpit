import { ItemsAssociatedTableDTO } from '../../api-output-types/task-management/items-associated-table-dto.interface';
import { PartAssociateTableDTO } from '../../api-output-types/task-management/part-associate-table-dto.interface';
import { PlanTaskCounterTableDTO } from '../../api-output-types/task-management/plan-task-counter-table-dto.interface';
import { BireMaintenancePlanDTO } from '../../api-types/bire-maintenance-plan-dto.interface';
import { BirePlanAttributeDTO } from '../../api-types/bire-plan-attribute-dto.interface';
import { BireTaskTaskDTO } from '../../api-types/bire-task-task-dto.interface';

export interface SaveMaintenanceProgramScreenInput {
  bireMaintenancePlanDTO?: BireMaintenancePlanDTO;
  statusSelected?: string;
  mpCodeSelected: string;
  isForUpdate: boolean;

  itemsAssociatedTableDTOAddedList?: ItemsAssociatedTableDTO[];
  itemsAssociatedTableDTODeletedList?: ItemsAssociatedTableDTO[];

  partAssociateTableDTOAddedList?: PartAssociateTableDTO[];
  partAssociateTableDTODeletedList?: PartAssociateTableDTO[];

  planTaskCounterTableDTOAddedList?: PlanTaskCounterTableDTO[];
  planTaskCounterTableDTODeletedList?: PlanTaskCounterTableDTO[];
  planTaskCounterTableDTOUpdatedList?: PlanTaskCounterTableDTO[];

  birePlanAttributeDTOAddedList?: BirePlanAttributeDTO[];
  birePlanAttributeDTODeletedList?: BirePlanAttributeDTO[];
  birePlanAttributeDTOUpdatedList?: BirePlanAttributeDTO[];

  bireTaskTaskDTO?: BireTaskTaskDTO[];
}
