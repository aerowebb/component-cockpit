import { BidmProjectDTO } from '../../api-types/bidm-project-dto.interface';
import { BidoEquipmentDTO } from '../../api-types/bido-equipment-dto.interface';

export interface ImportWorkTaskFromExcelInput {
  fileName: string;
  excelSource?: Uint8Array;
  bidmProjectDTO: BidmProjectDTO;
  bidoEquipmentDTO: BidoEquipmentDTO;
  deletion: boolean;
}
