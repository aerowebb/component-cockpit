import { BirePlanPnDTO } from '../../api-types/bire-plan-pn-dto.interface';

export interface PartAssociateTableDTO {
  birePlanPnDTO?: BirePlanPnDTO;
  pnCode?: string;
  pnName?: string;
  pnType?: string;
  planPnTypeText?: string;
}
