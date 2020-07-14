import { BireDocumentDTO } from '../../api-types/bire-document-dto.interface';
import { BirePnAttributeDTOId } from '../../api-types/bire-pn-attribute-dto-id.interface';
import { BirePnAttributeDTO } from '../../api-types/bire-pn-attribute-dto.interface';
import { BirePnDTO } from '../../api-types/bire-pn-dto.interface';
import { BirePnMeasureDTOId } from '../../api-types/bire-pn-measure-dto-id.interface';
import { BirePnMeasureDTO } from '../../api-types/bire-pn-measure-dto.interface';

export interface SavePartNumberInput {
  birePnDTO?: BirePnDTO;

  birePnMeasureDTOAddedList?: BirePnMeasureDTO[];
  birePnMeasureDTOUpdatedList?: BirePnMeasureDTO[];
  birePnMeasureDTOIdRemovedList?: BirePnMeasureDTOId[];

  birePnAttributeDTOAddedList?: BirePnAttributeDTO[];
  birePnAttributeDTOUpdatedList?: BirePnAttributeDTO[];
  birePnAttributeDTOIdRemovedList?: BirePnAttributeDTOId[];

  bireDocumentAddedList?: BireDocumentDTO[];
  bireDocumentRemovedList?: BireDocumentDTO[];
  bireDocumentUpdatedList?: BireDocumentDTO[];

  isForUpdate: boolean;
}
