import { BireDocumentDTO } from '../../api-types/bire-document-dto.interface';

import { BireDocPlanDTOId } from './bire-doc-plan-dto-id.interface';

export interface BireDocPlanDTO {
  bireDocPlanDTOId: BireDocPlanDTOId;
  bireDocumentDTO: BireDocumentDTO;
}
