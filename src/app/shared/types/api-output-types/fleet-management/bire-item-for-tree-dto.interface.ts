import { SafeResourceUrl } from '@angular/platform-browser';

import { BireDocumentDTO } from '../../api-types/bire-document-dto.interface';

export interface BireItemForTreeDTO {
  familyCode?: string;
  structureType?: string;
  variantCode?: string;
  chapter?: string;
  sheet?: string;
  marks?: string;
  section?: string;
  subject?: string;
  name?: string;
  itemType?: string;
  functionCode?: string;
  serializedPart?: boolean;
  itemFamilyCode?: string;
  unmFamilyCode?: string;
  unmStructureType?: string;
  unmVariantCode?: string;
  unmountCode?: string;
  itemNumber?: string;
  statusState?: string;
  statusUser?: string;
  statusDate?: string;
  quantity?: string;
  expectedQuantity?: string;
  realQuantity?: string;
  errorMessage?: string;
  icon?: string;
  totalCompletedInventory?: number;
  totalExpectedQuantity?: number;
  additionalData?: SafeResourceUrl;
  isItemCompleted?: number;
  bireDocumentDTO?: BireDocumentDTO;
}
