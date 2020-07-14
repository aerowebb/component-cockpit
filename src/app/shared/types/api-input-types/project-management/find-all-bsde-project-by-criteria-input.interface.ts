import { BsdeProjectDTO } from '../../api-types/bsde-project-dto.interface';

export interface FindAllBsdeProjectByCriteriaInput {
  bsdeProjectCriteria: BsdeProjectDTO;
  fleetSearch: boolean | undefined;
  endDateCriteria: string | undefined;
  startDateCriteria: string | undefined;
  statusDateCriteria: string | undefined;
  attributeMap: { [key: string]: string };
}
