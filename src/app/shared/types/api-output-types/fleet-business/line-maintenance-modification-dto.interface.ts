import { BireEvolutionDTO } from '../../api-types/bire-evolution-dto.interface';
import { BireModificationDTO } from '../../api-types/bire-modification-dto.interface';
import { BireSbDTO } from '../../api-types/bire-sb-dto.interface';

export interface LineMaintenanceModificationDTO {
  evolutionNumber?: string;
  asset?: string;
  complianceStatus?: string;
  complianceStatusDate?: string;
  isDeclared?: boolean;
  isEmbodied?: boolean;
  isRequested?: boolean;
  isMandatory?: boolean;
  control?: string;
  wpNumber?: number;
  relatedEvolution?: BireEvolutionDTO;
  relatedSb?: BireSbDTO;
  relatedModification?: BireModificationDTO;
}
