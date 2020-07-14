import { BireModificationDTO } from '../../api-types/bire-modification-dto.interface';

export interface FindModificationsByModificationPkAndDesignationInput {
  bireModificationDTO: BireModificationDTO;

  useCase?: string;
  module?: string;
}
