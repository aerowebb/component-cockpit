import { BidoEquipmentDTO } from '../../api-types/bido-equipment-dto.interface';
import { DefectLWO } from '../../api-types/defect-lwo.interface';
import { OperationLWO } from '../../api-types/operation-lwo.interface';

export interface CalculatePostFlightRecordsInformationsOutput {
  defectList?: DefectLWO[];
  operationList?: OperationLWO[];
  roleEquipmentList?: BidoEquipmentDTO[];
}
