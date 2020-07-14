import { BidtScenarioDTO } from '../../api-types/bidt-scenario-dto.interface';

export interface BidtScenarioFindByCriteriaInputDTO {
  targetStatusKey?: string;
  bidoProfileId?: number;
  bidtScenarioDTO?: BidtScenarioDTO;
}
