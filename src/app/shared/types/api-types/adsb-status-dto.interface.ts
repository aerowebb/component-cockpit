import { BidoEquipmentDTO } from './bido-equipment-dto.interface';
import { BidoEquipmentEvolutionDTO } from './bido-equipment-evolution-dto.interface';
import { BireConcernedAssetDTO } from './bire-concerned-asset-dto.interface';
import { BireEvolutionDTO } from './bire-evolution-dto.interface';
import { BireSbDTO } from './bire-sb-dto.interface';
import { ReportDTO } from './report-dto.interface';

export interface ADSBStatusDTO {
  equipmentCode?: string;
  eisDate?: Date;
  manufacturingDate?: Date;
  equipmentsInStructure?: BidoEquipmentDTO[];
  familyVariantCodes?: string[];
  applicableADs?: Map<String, BireSbDTO[]>;
  applicableSBs?: Map<String, BireSbDTO[]>;
  allBidoEquipmentEvolutionData?: BidoEquipmentEvolutionDTO[];
  appliedADs?: BidoEquipmentEvolutionDTO[];
  appliedSBs?: BidoEquipmentEvolutionDTO[];
  adToApply?: Map<String, BireSbDTO[]>;
  sbToApply?: Map<String, BireSbDTO[]>;
  allAppliedBireEvolutionData?: BireEvolutionDTO[];
  bireConcernedAssetDataList?: BireConcernedAssetDTO[];
  concernedAssetsReportData?: ReportDTO;
}
