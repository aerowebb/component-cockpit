import { ACTreeData } from '../../api-output-types/fleet-management/ac-tree-data-output';
import { TechnicalQuotationOutput } from '../../api-output-types/maintenance-component-cockpit/technical-quotation-output.interface';

export interface TechincalQuotationAndSubassembliesOutput {
  technicalQuotationList: TechnicalQuotationOutput[];
  subAssemblies?: ACTreeData[];
}
