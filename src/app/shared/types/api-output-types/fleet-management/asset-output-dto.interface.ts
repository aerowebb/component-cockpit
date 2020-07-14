import { SaveBidoMeasureInputDTO } from '../../api-input-types/fleet-management/save-bido-measure-input-dto.interface';
import { SaveUsageEquipmentInput } from '../../api-input-types/fleet-management/save-usage-equipment-input.interface';
import { AssetStructureTableDto } from '../../api-types/asset-structure-table-dto.interface';
import { BidoDocumentationDTOId } from '../../api-types/bido-documentation-dto-id.interface';
import { BidoEquipmentAttributeDTO } from '../../api-types/bido-equipment-attribute-dto.interface';
import { BidoEquipmentDTO } from '../../api-types/bido-equipment-dto.interface';
import { BidoEquipmentEvolutionDTOId } from '../../api-types/bido-equipment-evolution-dto-id.interface';
import { BidoEquipmentEvolutionInputOutputDTO } from '../../api-types/bido-equipment-evolution-input-output-dto.interface';
import { BidoFlTableDto } from '../../api-types/bido-fl-table-dto.interface';
import { MissionTableDTO } from '../../api-types/mission-table-dtO.interface';
import { NotificationTableDto } from '../../api-types/notification-table-dto.interface';
import { ReportDTO } from '../../api-types/report-dto.interface';
import { SuperiorAssetDTO } from '../../api-types/superior-asset-dto.interface';
import { UsageEquipmentDto } from '../../api-types/usage-equipment-dto.interface';
import { VistTableDto } from '../../api-types/vist-table-dto.interface';
import { SuperiorEquipmentDTO } from '../superior-equipment-dto.interface';
import { UsageCounterCalculationDTO } from '../usage-counter-calculation-dto.interface';

import { BidoDocumentationTableOutputDTO } from './bido-documentation-table-output-dto.interface';
import { FindBidoCounterReferencesByEquipmentCodeOutput } from './find-bido-counter-references-by-equipment-code-output';
import { ReferenceBatchDTO } from './reference-batch-dto.interface';
import { StockOutputDto } from './stock-output-dto.interface';

export interface AssetOutputDto {
  // fetch
  stockOutputDto: StockOutputDto;
  ownerCustomerName?: string;
  operatorCustomerName?: string;
  bidoNotificationDTOs?: NotificationTableDto[];
  missionTableDTOs?: MissionTableDTO[];
  bidoDocumentationTableOutputDTOs?: BidoDocumentationTableOutputDTO[];
  bidoFlTableDtos?: BidoFlTableDto[];
  bidoEquipmentEvolutionsFromRequest?: BidoEquipmentEvolutionInputOutputDTO[];
  vistTableDtos?: VistTableDto[];
  measureTableDtos?: FindBidoCounterReferencesByEquipmentCodeOutput[];
  usageEquipmentDto?: UsageEquipmentDto;
  bidoEquipmentEvolutionsRemovedList?: BidoEquipmentEvolutionDTOId[];
  assetStructureTableDtos?: AssetStructureTableDto[];
  bidoEquipmentAttributeDTOList?: BidoEquipmentAttributeDTO[];
  usageCounterCalculationDTO: UsageCounterCalculationDTO;

  bidoEquipmentDTO: BidoEquipmentDTO; // Create + fetch + update
  // Update-+
  saveUsageEquipment?: SaveUsageEquipmentInput;
  createBidoDocumentationTableOutputDTOs?: BidoDocumentationTableOutputDTO[];
  updateBidoDocumentationTableOutputDTOs?: BidoDocumentationTableOutputDTO[];
  removeBidoDocumentationId?: BidoDocumentationDTOId[];
  saveBidoMeasureDTO?: SaveBidoMeasureInputDTO[];
  superiorAsset: SuperiorAssetDTO;
  modelName?: string;
  modelCode?: string;
  itemNumber?: string;
  currentFLCode?: string;
  currentFLAttachmentDate?: Date;
  currentFLDescription?: string;
  ratingCode?: string;
  ratingName?: string;
  pMa?: boolean;
  reportDTO?: ReportDTO;
  showDeferredDefectAler?: boolean;
  deferredDefectAlerText?: string;
  manufacturingBatch?: ReferenceBatchDTO;
  superiorPackagingBatch?: ReferenceBatchDTO;
  superiorAircraft?: SuperiorEquipmentDTO;
  superiorEngine?: SuperiorEquipmentDTO;
}
