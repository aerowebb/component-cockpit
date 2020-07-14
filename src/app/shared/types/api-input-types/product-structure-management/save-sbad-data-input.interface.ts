import { BireConcernedAssetDTO } from '../../api-types/bire-concerned-asset-dto.interface';
import { BireDocSbDTO } from '../../api-types/bire-doc-sb-dto.interface';
import { BireDocumentDTO } from '../../api-types/bire-document-dto.interface';
import { BireMaintenancePlanDTOId } from '../../api-types/bire-maintenance-plan-dto-id.interface';
import { BireSbAttributeDTO } from '../../api-types/bire-sb-attribute-dto.interface';
import { BireSbCounterDTO } from '../../api-types/bire-sb-counter-dto.interface';
import { BireSbDTOId } from '../../api-types/bire-sb-dto-id.interface';
import { BireSbDTO } from '../../api-types/bire-sb-dto.interface';
import { BireSbVariantDTOId } from '../../api-types/bire-sb-variant-dto-id.interface';
import { BireSbVariantDTO } from '../../api-types/bire-sb-variant-dto.interface';

export interface SaveSbadDataInput {
  bireSb?: BireSbDTO;
  bireSbId?: BireSbDTOId;
  bireSbVariantAddedList?: BireSbVariantDTO[];
  bireSbVariantUpdatedList?: BireSbVariantDTO[];
  bireSbVariantDeletedList?: BireSbVariantDTOId[];
  bireDocumentAddedList?: BireDocumentDTO[];
  bireDocumentUpdatedList?: BireDocumentDTO[];
  bireDocDeletedList?: BireDocSbDTO[];
  bireConcernedAssetAddedList?: BireConcernedAssetDTO[];
  familyCode?: string;
  structureType?: string;
  variantCode?: string;
  bireSbAttributes?: BireSbAttributeDTO[];
  bireSbCounterDTO?: BireSbCounterDTO[];
  bireMaintenancePlanDTOId?: BireMaintenancePlanDTOId;
  isUpdate?: boolean;
}
