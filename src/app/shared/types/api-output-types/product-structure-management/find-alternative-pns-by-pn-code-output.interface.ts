import { BirePnDTO } from '../../api-types/bire-pn-dto.interface';

export interface FindAlternativePnsByPnCodeOutput {
  birePn: BirePnDTO;
  interchangeability?: string;
}
