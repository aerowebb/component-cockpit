export interface ADComplianceOutput {
  evolutionNumber?: string;
  evolutionRevisionNumber?: string;
  control?: string;
  document?: string;
  type?: string;
  familyVariant?: string;
  compliance?: string;
  message?: string;
  _id: number;
  expanded: boolean;
}
