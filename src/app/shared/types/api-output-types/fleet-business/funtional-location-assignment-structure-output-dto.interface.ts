import { BidoEquipmentDTO } from '../../api-types/bido-equipment-dto.interface';
import { BidoFlDTO } from '../../api-types/bido-fl-dto.interface';
import { LabelValue } from '../../label-value.interface';

export interface FuntionalLocationAssignmentStructureOutput {
  levelName?: string;
  flFunctionName?: string;
  flCode?: string;
  flDescription?: string;
  nominalQuantity?: number;
  requiredQuantity?: number;
  assetName?: string;
  flFunctionValue?: string;
  assignmentControl?: string;
  flEquipmentNumber?: string;
  colorFlEquipmentNumber?: string;
  dropDownList?: LabelValue<string>[];
  alertIcon?: string;
  alertToolTip?: string;
  assetCode?: string;
  bidoEquipmentDTO?: BidoEquipmentDTO;
  bidoFlDTO?: BidoFlDTO;
}
