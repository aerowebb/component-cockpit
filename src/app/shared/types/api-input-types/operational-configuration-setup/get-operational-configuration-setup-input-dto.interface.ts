import { BidmProjectDTOId } from '../../api-types/bidm-project-dto-id.interface';

export interface GetOperationalConfigurationSetupInputDTO {
  bidmProjectDTOId?: BidmProjectDTOId;
  opConfCode?: string;
}
