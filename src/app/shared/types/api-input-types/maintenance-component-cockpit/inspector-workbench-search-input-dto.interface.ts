import { BsdeProjectDTO } from '../../api-types/bsde-project-dto.interface';

export interface InspectorWorkBenchSearchInput {
  bsdeProjectDTOCriteria: BsdeProjectDTO;
  fleetSearch?: boolean;
  startDateCriteria?: string;
  endDateCriteria?: string;
  statusDateCriteria?: string;
  attributes?: Object;
  // send repair code as input from MRO drop down
  mroSiteText?: string;
  lastUserCriteria?: string;
}
