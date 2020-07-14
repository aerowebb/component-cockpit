export interface RunwaySchedulingFlightInfoOutputDTO {
  potential?: number;
  potentialUnit?: string;
  potentialStatus?: string;
  sn?: string;
  equipmentCode?: string;
  equipmentStatus?: string;
  requiredInstalls?: number;
  requiredRemovals?: number;
  nbTasks?: number;
  nbDefects?: number;
  nbScheduledWorkPackages?: number;
  eventStatus?: string;
  fuelDelta?: number;
  fuelDeltaUnit?: string;
  aircraftTieTarget?: number;
  fleetTieAverage?: number;
  aircraftTieCurrent?: number;
}
