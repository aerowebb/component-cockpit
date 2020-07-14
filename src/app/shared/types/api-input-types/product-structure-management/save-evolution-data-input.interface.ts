import { BireAlternativePnAndItemPnDTO } from '../../api-types/bire-alternative-pn-and-item-pn-dto.interface';
import { BireConcernedAssetDTO } from '../../api-types/bire-concerned-asset-dto.interface';
import { BireDocEvolDTOId } from '../../api-types/bire-doc-evol-dto-id.interface';
import { BireDocumentDTO } from '../../api-types/bire-document-dto.interface';
import { BireEvolutionAttributeDTO } from '../../api-types/bire-evolution-attribute-dto.interface';
import { BireEvolutionDTO } from '../../api-types/bire-evolution-dto.interface';
import { BireEvolutionEvolutionDTOId } from '../../api-types/bire-evolution-evolution-dto-id.interface';
import { BireEvolutionEvolutionDTO } from '../../api-types/bire-evolution-evolution-dto.interface';
import { BireEvolutionItemDTOId } from '../../api-types/bire-evolution-item-dto-id.interface';
import { BireEvolutionItemDTO } from '../../api-types/bire-evolution-item-dto.interface';
import { BireEvolutionPnDTOId } from '../../api-types/bire-evolution-pn-dto-id.interface';
import { BireEvolutionPnDTO } from '../../api-types/bire-evolution-pn-dto.interface';
import { BireEvolutionSbDTOId } from '../../api-types/bire-evolution-sb-dto-id.interface';
import { BireEvolutionSbDTO } from '../../api-types/bire-evolution-sb-dto.interface';
import { BireEvolutionVariantDTOId } from '../../api-types/bire-evolution-variant-dto-id.interface';
import { BireEvolutionVariantDTO } from '../../api-types/bire-evolution-variant-dto.interface';
import { BireModificationEvolutionDTOId } from '../../api-types/bire-modification-evolution-dto-id.interface';
import { BireModificationEvolutionDTO } from '../../api-types/bire-modification-evolution-dto.interface';

export interface SaveEvolutionDataInput {
  evolution: BireEvolutionDTO;

  bireApplicabilityAddedList: BireEvolutionVariantDTO[];
  bireApplicabilityUpdatedList: BireEvolutionVariantDTO[];
  bireApplicabilityDeletedList: BireEvolutionVariantDTOId[];

  bireConcernedAssetAddedList: BireConcernedAssetDTO[];

  bireImpactAddedList: BireEvolutionPnDTO[];
  bireImpactUpdatedList: BireEvolutionPnDTO[];
  bireImpactDeletedList: BireEvolutionPnDTOId[];

  bireImpactEvolAddedList: BireAlternativePnAndItemPnDTO[];
  bireImpactEvolUpdatedList: BireAlternativePnAndItemPnDTO[];
  bireImpactEvolDeletedList: BireAlternativePnAndItemPnDTO[];

  bireImpactItemAddedList: BireEvolutionItemDTO[];
  bireImpactItemUpdatedList: BireEvolutionItemDTO[];
  bireImpactItemDeletedList: BireEvolutionItemDTOId[];

  bireInterdependenceAddedList: BireEvolutionEvolutionDTO[];
  bireInterdependenceUpdatedList: BireEvolutionEvolutionDTO[];
  bireInterdependenceDeletedList: BireEvolutionEvolutionDTOId[];

  bireModificationAddedList: BireModificationEvolutionDTO[];
  bireModificationUpdatedList: BireModificationEvolutionDTO[];
  bireModificationDeletedList: BireModificationEvolutionDTOId[];

  bireSbadAddedList: BireEvolutionSbDTO[];
  bireSbadUpdatedList: BireEvolutionSbDTO[];
  bireSbadDeletedList: BireEvolutionSbDTOId[];

  bireEvolutionAttributes: BireEvolutionAttributeDTO[];

  bireDocumentAddedList: BireDocumentDTO[];
  bireDocumentUpdatedList: BireDocumentDTO[];
  bireDocDeletedList: BireDocEvolDTOId[];
}
