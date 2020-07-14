export interface HBireEvolutionDTO {
  timestamp: string;
  action: string;
  evolutionNumber?: string;
  evolutionRevisionNumber?: string;
  evolutionType?: string;
  evolutionSummary?: string;
  evolutionLevel?: string;
  evolutionCompliance?: string;
  tracked?: boolean;
  statusState?: string;
  statusUser?: string;
  statusDate?: Date;
}
