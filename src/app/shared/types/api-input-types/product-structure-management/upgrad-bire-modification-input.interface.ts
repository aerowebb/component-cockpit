import { BireModificationDTO } from '../../api-types/bire-modification-dto.interface';

export interface UpgradeBireModificationInput {
  bireModificationDTO: BireModificationDTO;
  targetRevisionNumber: string;
}
