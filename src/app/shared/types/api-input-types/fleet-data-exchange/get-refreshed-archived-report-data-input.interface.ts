import { BireVariantVersionDTOId } from '../../api-types/bire-variant-version-dto-id.interface';

export interface GetRefreshedArchivedReportDataInput {
  bireVariantVersionId?: BireVariantVersionDTOId;
  data: string;
  format: string;
  type: string;
  reportCode: string;
}
