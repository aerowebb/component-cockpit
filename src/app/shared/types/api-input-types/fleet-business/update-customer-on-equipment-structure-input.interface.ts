import { EventInformationsDTO } from '../../api-types/event-informations-dto.interface';

export interface UpdateCustomerOnEquipmentStructureInput {
  topEquipmentCode?: string;
  field?: string;
  customerCode?: string;
  newRegistration?: string;
  newSn?: string;
  propagate: boolean;
  informationsDTO: EventInformationsDTO;
  backgroundProcess: boolean;
}
