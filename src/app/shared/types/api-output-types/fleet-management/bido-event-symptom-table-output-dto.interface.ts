import { BidoParameterCustomTableDTO } from './bido-parameter-custom-table-dto.interface';

export interface BidoEventSymptomTableOutputDTO {
  symptomName?: string;
  symptomComment?: string;
  symptomCode?: string;
  notificationCode?: string;
  missionType?: string;
  bidoParameterCustomTableDTOList?: BidoParameterCustomTableDTO[];
}
