import { FlVariantInput } from '../../api-input-types/fleet-management/fl-variant-input.interface';
import { BidoDocumentationDTOId } from '../../api-types/bido-documentation-dto-id.interface';
import { BidoDocumentationDTO } from '../../api-types/bido-documentation-dto.interface';
import { BidoFamilyVariantDTO } from '../../api-types/bido-family-variant-dto.interface';
import { BidoFlDTOId } from '../../api-types/bido-fl-dto-id.interface';
import { BidoFlDTO } from '../../api-types/bido-fl-dto.interface';
import { BidoFlModelDTOId } from '../../api-types/bido-fl-model-dto-id.interface';
import { BidoFlModelDTO } from '../../api-types/bido-fl-model-dto.interface';
import { BidoFlVariantDTOId } from '../../api-types/bido-fl-variant-dto-id.interface';

export interface SaveFunctionalLocationInput {
  isUpdate: boolean;
  bidoFlDTO?: BidoFlDTO;
  bidoFlDTORemovedList?: BidoFlDTOId[];

  //  bidoEquipmentDTOAddedList?: BidoFlEquipmentDTO[];
  //  bidoEquipmentDTOUpdatedList?: BidoFlEquipmentDTO[];
  //  bidoEquipmentDTORemovedList?: BidoFlEquipmentDTOId[] ;

  //  bireVariantVersionDTO?: BireVariantVersionDTO;
  bireFamilyVariantDTOAddedList?: BidoFamilyVariantDTO[];

  flVariantInputAddedList?: FlVariantInput[];
  bidoFlVariantDTORemovedList?: BidoFlVariantDTOId[];

  flTreeList?: BidoFlDTO[];

  flModelAddedList: BidoFlModelDTO[];
  flModelRemovedList: BidoFlModelDTOId[];

  //  bidoModelDTOAddedList?: BidoModelDTO[];
  //  bidoFlModelAddedList?: BidoFlModelDTO[];
  //  bidoFlModelRemovedList?: BidoFlModelDTOId[];

  bidoDocumentationAdded?: BidoDocumentationDTO;
  bidoDocumentationRemoved?: BidoDocumentationDTOId;
}
