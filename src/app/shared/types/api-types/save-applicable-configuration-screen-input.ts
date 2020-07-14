import { BireEvolutionEvolutionDTOId } from './bire-evolution-evolution-dto-id.interface';
import { BireEvolutionEvolutionDTO } from './bire-evolution-evolution-dto.interface';
import { BirePartnerDTOId } from './bire-partner-dto-id.interface';
import { BirePartnerDTO } from './bire-partner-dto.interface';
import { BireQualifVariantDTOId } from './bire-qualif-variant-dto-id.interface';
import { BireQualifVariantDTO } from './bire-qualif-variant-dto.interface';
import { BireRatingDTO } from './bire-rating-dto.interface';
import { BireUnmountAssemblyDTOId } from './bire-unmount-assembly-dto-id.interface';
import { BireUnmountAssemblyDTO } from './bire-unmount-assembly-dto.interface';
import { BireUnmountOrderDTOId } from './bire-unmount-order-dto-id.interface';
import { BireUnmountOrderDTO } from './bire-unmount-order-dto.interface';
import { BireVariantAttributeDTO } from './bire-variant-attribute-dto.interface';
import { BireVariantVersionDTO } from './bire-variant-version-dto.interface';
import { ConfigurationDocumentsDTO } from './configuration-documents-dto.interface';

export interface SaveApplicationConfigurationDataInput {
  bireVariantVersionDTO: BireVariantVersionDTO;
  birePartnerDTOAddedList: BirePartnerDTO[];
  birePartnerDTOUpdatedList: BirePartnerDTO[];
  birePartnerDTODeletedList: BirePartnerDTOId[];

  bireQualificationDTOAddedList: BireQualifVariantDTO[];
  bireQualifVariantDTODeletedList: BireQualifVariantDTOId[];

  bireUnmountAssemblyDTOAddedList: BireUnmountAssemblyDTO[];
  bireUnmountAssemblyDTOIdDeletedList: BireUnmountAssemblyDTOId[];

  bireUnmountOrderDTOAddedList: BireUnmountOrderDTO[];
  bireUnmountOrderDeletedList: BireUnmountOrderDTOId[];

  configurationDocumentsAddedList: ConfigurationDocumentsDTO[];
  configurationDocumentsUpdatedList: ConfigurationDocumentsDTO[];
  configurationDocumentsRemovedList: ConfigurationDocumentsDTO[];

  bireInterdependenceAddedList: BireEvolutionEvolutionDTO[];
  bireInterdependenceUpdatedList: BireEvolutionEvolutionDTO[];
  bireInterdependenceDeletedList: BireEvolutionEvolutionDTOId[];

  bireVariantAttribute: BireVariantAttributeDTO[];

  bireRatingDTOAddedList: BireRatingDTO[];
  bireRatingDTORemovedList: BireRatingDTO[];
}
