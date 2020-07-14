import { BidtControlGroupDTO } from '../../api-types/bidt-control-group-dto.interface';

export interface BidtScenarioControlGroupCustomDTO {
  bidtControlGroupData?: BidtControlGroupDTO;
  bidtControlGroupId?: number;
  bidtScenarioId?: number;
  isMandatory?: boolean;
  isVisible?: boolean;
  isReadOnly?: boolean;
  isManaged?: boolean;
}
