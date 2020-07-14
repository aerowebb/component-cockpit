import { BsdeProjectDTO } from '../../api-types/bsde-project-dto.interface';

export interface UpdateMaintenanceForecastingInput {
  maintenanceForecastingProjectId: string;

  bsdeProjectDTO: BsdeProjectDTO;
}
