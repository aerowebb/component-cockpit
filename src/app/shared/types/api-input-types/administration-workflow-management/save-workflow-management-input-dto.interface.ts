import { BidtScenarioDataCustomOutputDTO } from '../../api-output-types/administration-workflow-management/bidt-scenario-data-custom-output-dto.interface';

export interface SaveWorkflowManagementInputDTO {
  bidtScenarioDataCustomOutputDTO: BidtScenarioDataCustomOutputDTO;
  isScenarioUpdated: boolean;
}
