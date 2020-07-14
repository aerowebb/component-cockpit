import { BireMaintenancePlanDTO } from '../../api-types/bire-maintenance-plan-dto.interface';
import { BireVariantVersionDTO } from '../../api-types/bire-variant-version-dto.interface';

export interface FindBireMaintenancePlansByCriteriaInput {
  bireMaintenancePlanDTO: BireMaintenancePlanDTO;
  bireVariantVersionDTO: BireVariantVersionDTO;
}
