import { BireOperationDTO } from '../../api-types/bire-operation-dto.interface';

export interface CalculateCostOfBireOperationInput {
  operationManHour: number;
  qualificationCode: string;
  duration: number;
  operationDTO: BireOperationDTO;
}
