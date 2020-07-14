import { BireShopManualDTO } from '../../api-output-types/administration-catalog/bire-shop-manual-dto.interface';
import { FindAllWorkTemplateDTO } from '../../api-output-types/administration-catalog/find-all-work-template-dto.interface';
import { BidoExtensionContextSymptomOutputDTO } from '../../api-output-types/catalog/bido-extension-context-symptom-output-dto.interface';
import { GetSubscriptionDataAndContactListByOutputDTO } from '../../api-output-types/catalog/get-subscription-data-and-contact-list-by-output-dto.interface';
import { BidoNotificationTypeDTO } from '../../api-types/bido-notification-type-dto.interface';
import { CompanyHolidaySaveDTO } from '../../api-types/bidt-company-holiday-save-dto.interface';
import { BidtContractDTO } from '../../api-types/bidt-contract-dto.interface';
import { BidtQualificationDTO } from '../../api-types/bidt-qualification-dto.interface';
import { BidtStockTypeDTO } from '../../api-types/bidt-stock-type-dto.interface';
import { BidtStorageBinTypeDTO } from '../../api-types/bidt-storage-bin-type-dto.interface';
import { BidtStorageConditionDTO } from '../../api-types/bidt-storage-condition-dto.interface';
import { BidtValuationGroupDTO } from '../../api-types/bidt-valuation-group-dto.interface';
import { BireDamageDTO } from '../../api-types/bire-damage-dto.interface';
import { BireKPourcentDTO } from '../../api-types/bire-k-pourcent-dto.interface';
import { BireLocalisationCodeDTO } from '../../api-types/bire-localisation-code-dto.interface';
import { BireMaintenanceEnvironmentDTO } from '../../api-types/bire-maintenance-environment-dto.interface';
import { BireMeasureReferenceDTO } from '../../api-types/bire-measure-reference-dto.interface';
import { BireRangeDTO } from '../../api-types/bire-range-dto.interface';
import { BireReturnReasonDTO } from '../../api-types/bire-return-reason-dto.interface';
import { BireTaskGroupDTO } from '../../api-types/bire-task-group-dto.interface';
import { BireTilDTO } from '../../api-types/bire-til-dto.interface';
import { BireUnitMeasureDTO } from '../../api-types/bire-unit-measure-dto.interface';

export interface SaveCatalogInput {
  bidoNotificationTypeDTOAddedList?: BidoNotificationTypeDTO[];
  bidoNotificationTypeDTOUpdatedList?: BidoNotificationTypeDTO[];
  bidoSubscriptionList?: GetSubscriptionDataAndContactListByOutputDTO;
  bidtStorageConditionAddOrUpdateList?: BidtStorageConditionDTO[];
  bidtLaborTemplateDTOAddorUpdateList?: FindAllWorkTemplateDTO[];
  bidtContractDTOAddOrUpdateList?: BidtContractDTO[];
  bidoExtensionAddedList?: BidoExtensionContextSymptomOutputDTO;
  bidoExtensionUpdatedList?: BidoExtensionContextSymptomOutputDTO;
  bidtCompanyHolidayAddOrUpdateList?: CompanyHolidaySaveDTO[];
  bireReturnReasonAddedList?: BireReturnReasonDTO[];
  bireReturnReasonUpdatedList?: BireReturnReasonDTO[];
  bidoDamageUpdatedList?: BireDamageDTO[];
  bidoDamageAddedList?: BireDamageDTO[];
  bireLocalisationCodeAddedList?: BireLocalisationCodeDTO[];
  bireUnitMeasureDTOAddedList?: BireUnitMeasureDTO[];
  bireUnitMeasureDTOUpdatedList?: BireUnitMeasureDTO[];
  bireMeasureReferenceDTOAddedList?: BireMeasureReferenceDTO[];
  bireMeasureReferenceDTOUpdatedList?: BireMeasureReferenceDTO[];
  bireTilDTOUpdatedList?: BireTilDTO[];
  bireTilDTOAddedList?: BireTilDTO[];
  bireKPourcentDTOAddedList?: BireKPourcentDTO[];
  bireKPourcentDTOUpdatedList?: BireKPourcentDTO[];
  bidtValuationGroupAddOrUpdateDTOList?: BidtValuationGroupDTO[];
  bireMaintenanceEnvironmentDTOUpdatedList?: BireMaintenanceEnvironmentDTO[];
  bireMaintenanceEnvironmentDTOAddedList?: BireMaintenanceEnvironmentDTO[];
  bireRangeUpdatedList?: BireRangeDTO[];
  bireRangeAddedList?: BireRangeDTO[];
  bireTaskGroupAddedList?: BireTaskGroupDTO[];
  bireTaskGroupUpdatedList?: BireTaskGroupDTO[];
  bidtStorageBinTypeDTOList?: BidtStorageBinTypeDTO[];
  // saveParameterUpdateDTOList?: SaveParameterDTO;
  // saveParameterAddDTOList?: SaveParameterDTO;
  bidtStockTypeDTOAddorUpdateList?: BidtStockTypeDTO;
  bidtQualificationDTOAddOrUpdateList?: BidtQualificationDTO[];
  bireShopManualAddedList?: BireShopManualDTO[];
  bireShopManualUpdatedList?: BireShopManualDTO[];
}