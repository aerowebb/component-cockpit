import { BireDocumentCustomDTO } from '../../api-types/bire-document-custom-dto.interface';
import { BireOperationCustomDTO } from '../../api-types/bire-operation-custom-dto.interface';
import { BireQualificationDTO } from '../../api-types/bire-qualification-dto.interface';
import { BireSmTaskDTO } from '../../api-types/bire-sm-task-dto.interface';
import { BireTaskAttributeCustomDTO } from '../../api-types/bire-task-attribute-custom-dto.interface';
import { BireTaskDTO } from '../../api-types/bire-task-dto.interface';
import { BireTaskEvolutionMaintenanceDTO } from '../../api-types/bire-task-evolution-maintenance-dto.interface';
import { BireTaskItemWithItemCustomDTO } from '../../api-types/bire-task-item-with-item-custom-dto.interface';
import { BireTilDTO } from '../../api-types/bire-til-dto.interface';
import { GetMaintainanceProgramWithTaskDTO } from '../../api-types/get-maintainance-program-with-task-dto.interface';
import { GetTaskLinkInAdequateCustomDTO } from '../../api-types/get-task-link-in-adequate-custom-dto.interface';

import { BireMeasurementCustomDTO } from './bire-measurement-custom-dto.interface';

export interface MaintenanceProgramUpdatedOutputDTO {
  cVersionBireTaskDTO: BireTaskDTO;
  pVersionBireTaskDTO: BireTaskDTO;
  cVersionBireOperationDTO: BireOperationCustomDTO[];
  pVersionBireOperationDTO: BireOperationCustomDTO[];
  cVersionBireTaskEvolutionDTO: BireTaskEvolutionMaintenanceDTO[];
  pVersionBireTaskEvolutionDTO: BireTaskEvolutionMaintenanceDTO[];
  cGetTaskLinkInAdequateTableDTO: GetTaskLinkInAdequateCustomDTO;
  pGetTaskLinkInAdequateTableDTO: GetTaskLinkInAdequateCustomDTO;
  cVersionMaintainanceWithTask: GetMaintainanceProgramWithTaskDTO[];
  pVersionMaintainanceWithTask: GetMaintainanceProgramWithTaskDTO[];
  cVersionBireDocumentDTO: BireDocumentCustomDTO[];
  pVersionBireDocumentDTO: BireDocumentCustomDTO[];
  cVersionBireTaskAttribute: BireTaskAttributeCustomDTO[];
  pVersionBireTaskAttribute: BireTaskAttributeCustomDTO[];
  cVersionBireTaskMeasureList: BireMeasurementCustomDTO[];
  pVersionBireTaskMeasureList: BireMeasurementCustomDTO[];
  cVersionBireTaskItemList: BireTaskItemWithItemCustomDTO[];
  pVersionBireTaskItemList: BireTaskItemWithItemCustomDTO[];
  cVersionBireSmTaskList: BireSmTaskDTO[];
  pVersionBireSmTaskList: BireSmTaskDTO[];
  cVersionBireQualificationList: BireQualificationDTO[];
  pVersionBireQualificationList: BireQualificationDTO[];
  cVersionBireTilList: BireTilDTO[];
  pVersionBireTilList: BireTilDTO[];
  pVersionGetMaintainanceProgramWithTaskDTO: GetMaintainanceProgramWithTaskDTO;
}
