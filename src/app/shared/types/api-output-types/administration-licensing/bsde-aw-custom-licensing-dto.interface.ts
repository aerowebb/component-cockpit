import { BsdeAwCustomDTO } from '../../api-types/bsde-aw-custom-dto.interface';

export interface BsdeAwCustomLicensingDTO {
  bsdeAwCustomDTO?: BsdeAwCustomDTO;
  isAWLicenceNumberCustomized?: boolean;
  licencingAutorised?: string;
}
