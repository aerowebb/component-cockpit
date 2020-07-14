
export interface MaintenanceProgram {

 	planTaskCounterMap?: Map????;
	taskTaskMap?: Map????;
	visitTaskPkList?: List????;
	untrackedVisitTaskPkList?: List????;
	untrackedTaskPkList?: List????;
	visitsByTrackingItemMap?: Map????;
	tasksByTrackingItemMap?: Map????;
	countersOfTasksFromVisitMap?: Map????;
	planCode?: string;
	planName?: string;
	planDescription?: string;
	planRevisionNumber?: string;
	planRevisionDate?: Date;
	planApprovalNumber?: string;
	planApprovalDate?: Date;
	planValidityEndDate?: Date;
	statusState?: string;
	statusUser?: string;
	statusDate?: Date;
	
}
