export interface AirworthinessControlDTO {
  id: number;
  asset?: string;
  designation?: string;
  alert?: string;
  status?: string;
  maintenanceProgram?: string;
  nextWP?: string;
  nextFlight?: string;
  potentialValue?: string;
  potentialEstimatedDate?: Date;
  maintenancePreventiveAlert?: string;
  maintenanceCorrectiveAlert?: string;
  maintenanceProgresAlert?: string;
  maintenanceConfigAlert?: string;
  maintenanceDocsAlert?: string;
  children?: AirworthinessControlDTO[];
}
