import { HAttributeDTO } from './h-attribute-dto.interface';

export interface HBireEvolutionAttributeDTO extends HAttributeDTO {
  timestamp?: Date;
  evolutionNumber?: string;
  evolutionRevisionNumber?: string;
  action?: string;
}
