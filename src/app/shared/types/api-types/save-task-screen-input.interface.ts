import { BireTaskMeasurementPointTableDTO } from '../api-output-types/task-management/bire-task-measurement-point-table-dto.interface';

import { BireDocumentDTOId } from './bire-document-dto-id.interface';
import { BireDocumentDTO } from './bire-document-dto.interface';
import { BireOperationDTOId } from './bire-operation-dto-id.interface';
import { BireOperationDTO } from './bire-operation-dto.interface';
import { BireQualificationDTOId } from './bire-qualification-dto-id.interface';
import { BireQualificationDTO } from './bire-qualification-dto.interface';
import { BireTaskAttributeDTO } from './bire-task-attribute-dto.interface';
import { BireTaskDTO } from './bire-task-dto.interface';
import { BireTaskEvolutionDTOId } from './bire-task-evolution-dto-id.interface';
import { BireTaskEvolutionDTO } from './bire-task-evolution-dto.interface';
import { BireTaskItemDTOId } from './bire-task-item-dto-id.interface';
import { BireTaskItemDTO } from './bire-task-item-dto.interface';
import { BireTaskMeasureDTOId } from './bire-task-measure-dto-id.inteface';
import { BireTaskMeasureDTO } from './bire-task-measure-dto.interface';
import { BireTaskTaskDTOId } from './bire-task-task-dto-id.interface';
import { BireTaskTaskDTO } from './bire-task-task-dto.interface';
import { BireTilTaskDTOId } from './bire-til-task-dto-id.interface';
import { BireTilTaskDTO } from './bire-til-task-dto.interface';

export interface SaveTaskScreenInput {
  bireTaskDTO: BireTaskDTO;

  bireOperationAddedList?: BireOperationDTO[];
  bireOperationDeletedList?: BireOperationDTOId[];

  bireTaskEvolutionAddedList?: BireTaskEvolutionDTO[];
  bireTaskEvolutionDeletedList?: BireTaskEvolutionDTOId[];

  bireTaskLinkAddedList?: BireTaskTaskDTO[];
  bireTaskLinkUpdatedList?: BireTaskTaskDTO[];
  bireTaskLinkDeletedList?: BireTaskTaskDTOId[];

  bireTilTaskAddedList?: BireTilTaskDTO[];
  bireTilTaskDeletedList?: BireTilTaskDTOId[];

  bireQualificationAddedList?: BireQualificationDTO[];
  bireQualificationDeletedList?: BireQualificationDTOId[];

  bireDocumentAddedList?: BireDocumentDTO[];
  bireDocumentUpdatedList?: BireDocumentDTO[];
  bireDocumentDeletedList?: BireDocumentDTOId[];

  bireTaskItemAddedList?: BireTaskItemDTO[];
  bireTaskItemDeletedList?: BireTaskItemDTOId[];

  bireTaskMeasureAddedList?: BireTaskMeasureDTO[];
  bireTaskAttributeUpdatedList?: BireTaskAttributeDTO[];
  createUpdateBireTaskMeasurementList?: BireTaskMeasurementPointTableDTO[];
  removeBireTaskMeasurementList?: BireTaskMeasureDTOId[];
}
