import { BidoFunctionTypeDTO } from './bido-function-type-dto.interface';

export interface BidoFunctionTypePopUpDTO {
  bidoFunctionTypeDTO: BidoFunctionTypeDTO;
  isAffected: boolean;
  level: string;
  selectedLevelList?: string[]; // Added extra parmeter(Not in backend) to display muplitple selected buttons
}
