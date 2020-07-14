import { BidoEquipmentDTOId } from './bido-equipment-dto-id.interface';
import { BidtProcReqItemDTO } from './bidt-proc-req-item-dto.interface';
import { BireItemDTOId } from './bire-item-dto-id.interface';

export interface WorkOrderManagementInputDTO {
  topAssetDtoId: BidoEquipmentDTOId; // top asset of concerned asset structure
  // Project fields
  projectId?: string; // project id is null if new work package was entered
  // Following fields are null if project id was selected
  projectName?: string;
  projectMroCenterCode?: string;
  projectAssignedTo?: string;
  projectType?: string;
  projectOperationCode?: string;
  projectStartDate?: Date;
  projectDueDate?: Date;
  projectDescription?: string;

  // Work order fields
  woType: string; // remove = "SN Change", install = "Manual Entry" or "Task"
  woDescription?: string; // free text to describe work order - optional
  woPn?: string; // not mandatory for removal
  woSn?: string; // not mandatory for removal
  woItemDTOId?: BireItemDTOId; // absolute functional position (Item) where install or removal will be performed - optional
  woFlCode?: string; // functional position (FL) where install or removal will be performed - optional
  woFunctionCode?: string; // relative functional position (Function Code) where install or removal will be performed - optional
  woSuperiorAssetCode?: string; // superior asset code on which install or removal will be performed - optional
  woTaskCode?: string; // task is optional
  woTaskVersion?: string; // task is optional

  // Movement fields
  movementWay: string; // remove = "CREDIT", install = "DEBIT"
  movementPnCode?: string; // not mandatory. For install, preferred PN of position will be put by default
  movementSn?: string; // not mandatory
  movementWarehouseId?: number; // not mandatory
  generateProcReq?: boolean; // not mandatory
  bidtProcRecItemDTO?: BidtProcReqItemDTO; // not mandatory
}
