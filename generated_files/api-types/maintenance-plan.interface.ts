import {ADSBStatusDTO} from './adsb-status-dto.interface';
import {LifeLimitedPartStatusDTO} from './life-limited-part-status-dto.interface';
import {MaintenanceProgramDTO} from './maintenance-program-dto.interface';
import {BireMaintenancePlanDTO} from './bire-maintenance-plan-dto.interface';

export interface MaintenancePlan {

 	equipmentCode?: string;
	eisDate?: Date;
	manufacturingDate?: Date;
	adSbStatus?: ADSBStatusDTO;
	lifeLimitedPartStatus?: LifeLimitedPartStatusDTO;
	maintenanceProgram?: MaintenanceProgramDTO;
	lastMaintenanceProgram?: BireMaintenancePlanDTO;
	maintenancePlanVisitList?: List????;
	maintenancePlanTaskList?: List????;
	bireTaskList?: List????;
	bireTaskEvolutionList?: List????;
	taskApplicationList?: List????;
	bidoEquipmentEvolutionList?: List????;
	bireMeasureReferenceMap?: Map????;
	measureListsByCounterCodeMap?: Map????;
	taskItemPnList?: List????;
	maintenancePlanId?: number;
	planCode?: string;
	customizationStatus?: string;
	
}
