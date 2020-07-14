import { BidoEquipmentDTO } from '../../api-types/bido-equipment-dto.interface';

export interface LoadLineMaintenanceOuput {
  equipmentDTO: BidoEquipmentDTO;
  assetCSN: string;
  assetTSN: string;
  requestedOpeConfigCode: string;
  requestedOpeConfigDetails: string;
  operationControlResult: string;
  workPackageControlResult: string;
}
