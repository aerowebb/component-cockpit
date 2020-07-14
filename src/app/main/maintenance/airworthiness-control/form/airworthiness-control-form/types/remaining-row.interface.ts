import { ComputeRemainingForAirworthinessControlPartOutput } from '../../../../../../shared/types/api-output-types/airworthiness-management/compute-remaining-for-airworthiness-control-part-output.interface';

export interface RemainingRow {
  elementDesignation?: string;
  elementDesignationTooltip?: string | undefined;
  elementId: string;
  elementIdTooltip?: string | undefined;
  remainingType: string;
  remainingValue: string;
  _obj: ComputeRemainingForAirworthinessControlPartOutput;
}
