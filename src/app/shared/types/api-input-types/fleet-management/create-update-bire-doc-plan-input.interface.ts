import { BireDocumentDTO } from '../../api-types/bire-document-dto.interface';

export interface CreateUpdateBireDocPlanInput {
  planCode: string;
  bireDocumentDTO: BireDocumentDTO;
}
