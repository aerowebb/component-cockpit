import { BireSbDTO } from '../../api-types/bire-sb-dto.interface';

export interface UpgradeBireSbInput {
  bireSb?: BireSbDTO;
  targetRevisionNumber?: string;
}
