import { ControlByIdentifierDTO } from './control-by-identifier-dto.interface';

export interface UserWorkflowOutput {
  listControlByIdentifier?: ControlByIdentifierDTO[];
  targetStatusKeyList?: string[];
}
