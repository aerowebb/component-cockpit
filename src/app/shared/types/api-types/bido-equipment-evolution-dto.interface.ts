export interface BidoEquipmentEvolutionDTO {
  evolutionType?: string;
  evolutionNumber?: string;
  evolutionRevisionNumber?: string;
  equipmentCode?: string;
  dateApplied?: Date;
  dateRemove?: Date;
  dateAppliedStr?: string;
  dateRemoveStr?: string;
  isPartiallyApplied?: boolean;
  isNotApplicable?: boolean;
  manufacturingModification?: boolean;
  description?: string;
  statusState?: string;
  statusUser?: string;
  statusDate?: Date;
  newApplication?: string;
}
