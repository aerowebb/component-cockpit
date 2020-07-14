import { BidoExtensionDTO } from '../../api-types/bido-extension-dto.interface';
import { BidoParameterDTO } from '../../api-types/bido-parameter-dto.interface';

export interface BidoExtensionContextSymptomOutputDTO {
  bidoExtensionDTO?: BidoExtensionDTO;
  bidoParameterDTO?: BidoParameterDTO[];
}
