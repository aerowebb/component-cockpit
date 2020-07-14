import { FunctionalLocationAssignmentOrphanListOutput } from './functional-location-assignment-orphan-list-output-dto.interface';
import { FuntionalLocationAssignmentStructureOutput } from './funtional-location-assignment-structure-output-dto.interface';

export interface FLAssignTreeNode {
  data?: FuntionalLocationAssignmentStructureOutput;
  parent?: FLAssignTreeNode;
  children?: FLAssignTreeNode[];
  complianceControl?: string;
  assignmentControl?: string;
  orphanList?: FunctionalLocationAssignmentOrphanListOutput[];
  bidoEquipmentMap?: object;
  hide?: boolean;
}
