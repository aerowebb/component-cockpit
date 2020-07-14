import { BireDamLocTaskDTO } from '../../api-types/bire-dam-loc-task-dto.interface';

export interface BireDamLocTaskOutput {
  bireDamLocTaskDTO?: BireDamLocTaskDTO;
  damageDescription?: string;
  localisationDescription?: string;
  taskDesignation?: string;
}
