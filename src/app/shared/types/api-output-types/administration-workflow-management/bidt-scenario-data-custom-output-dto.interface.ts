import { BidtScenarioDTO } from '../../api-types/bidt-scenario-dto.interface';

import { BidtScenarioControlGroupCustomDTO } from './bidt-scenario-control-group-custom-dto.interface';
import { BidtScenarioProfileGroupDTO } from './bidt-scenario-profile-group-dto.interface ';
import { BidtScenarioTargetStatusGroupDTO } from './bidt-scenario-target-status-group-dto.interface';

export interface BidtScenarioDataCustomOutputDTO {
  bidtScenarioDTO?: BidtScenarioDTO;
  bidtScenarioControlGroupList?: BidtScenarioControlGroupCustomDTO[];
  bidtScenProfileGroupList?: BidtScenarioProfileGroupDTO[];
  bidtScenStatusGroupList?: BidtScenarioTargetStatusGroupDTO[];
}
