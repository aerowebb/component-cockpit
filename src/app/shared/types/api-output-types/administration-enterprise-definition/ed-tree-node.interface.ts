import { EnterpriseDefinitionOutputDTO } from './enterprise-definition-output-dto.interface';

export interface EDTreeNode {
  data?: EnterpriseDefinitionOutputDTO;
  parent?: EDTreeNode;
  isChildData?: boolean;
  children?: EDTreeNode[];
}
