import { BireModificationDTO } from '../../api-types/bire-modification-dto.interface';

export interface FindBireModificationsByModificationPKAndDesignationInput {
  bireModificationDTO?: BireModificationDTO;
  useCase?: string;
  module?: string;
}
