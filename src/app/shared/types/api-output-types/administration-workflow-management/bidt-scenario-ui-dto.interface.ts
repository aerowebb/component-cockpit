import { LabelValue } from '../../label-value.interface';

export interface BidtScenarioUIDTO {
  bidtScenarioProfileList?: LabelValue<string>[];
  selectedProfileVal?: string;
  selectedProfileLabel?: string;
  targetStatusKeyList?: LabelValue<string>[];
  selectedStatusVal?: string;
  selectedStatusLabel?: string;
  bidtFuncObjectId?: number;
  name?: string;
  id?: number;
  description?: string;
  initialStatusKey?: string;
  initialStatusLabel?: string;
}
