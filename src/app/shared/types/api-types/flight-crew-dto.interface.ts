import { LicenseQualificationDTO } from './license-qualification-dto.interface';
import { PersonDTO } from './person-dto.interface';

export interface FlightCrewDTO {
  id?: string;
  position?: string;
  person?: PersonDTO;
  license?: LicenseQualificationDTO;
  landing?: number;
  hourDayIfr?: string;
  hourDayVfr?: string;
  hourNightIfr?: string;
  hourNightVfr?: string;
}
