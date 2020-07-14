import { HistoricObjectDto } from './historic-object-dto.interface';

export interface HistoricObjectEvolutionDTO extends HistoricObjectDto {
  evolutionType: string;
  evolutionSummary: string;
  evolutionLevel: string;
  evolutionCompliance: string;
  tracked: string;
}
