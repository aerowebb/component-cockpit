import { BidmProjectDTO } from './bidm-project-dto.interface';
import { WorksManagementInformationDTO } from './works-management-information-dto-interface';

export interface WorksManagementDTO {
  bidmProjectDTO: BidmProjectDTO;
  nbCloseWorkOrders: number;
  nbTotalWorkOrders: number;
  worksManagementInformationDTOs: WorksManagementInformationDTO[];
}
