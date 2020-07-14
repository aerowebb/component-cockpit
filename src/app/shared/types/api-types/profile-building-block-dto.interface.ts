import { BidoFunctionTypePopUpDTO } from './bido-function-type-popup-dto.interface';

export interface ProfileBuildingBlockDTO {
  buildingBlockCode: string;
  buildingBlockText: string;
  useCases: BidoFunctionTypePopUpDTO[];
}
