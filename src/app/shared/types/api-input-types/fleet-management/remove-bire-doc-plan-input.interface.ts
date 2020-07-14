import { BireDocumentDTOId } from '../../api-types/bire-document-dto-id.interface';

export interface RemoveBireDocPlanInput {
  planCode: string;
  bireDocumentDTOId: BireDocumentDTOId;
}
