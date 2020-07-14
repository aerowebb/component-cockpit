import { BsdeProjectAttributeDTOId } from '../../api-types/bsde-project-attribute-dto-id.interface';
import { BsdeProjectAttributeDTO } from '../../api-types/bsde-project-attribute-dto.interface';
import { BsdeProjectDTO } from '../../api-types/bsde-project-dto.interface';

export interface SaveBsdeProjectInput {
  bsdeProjectAttributeDTOList?: BsdeProjectAttributeDTO[];
  removeBsdeProjectAttributeDTOIdList?: BsdeProjectAttributeDTOId[];
  bsdeProjectDTO: BsdeProjectDTO;
}
