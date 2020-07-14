import {FlightScheduleDTO} from './flight-schedule-dto.interface';
import {TaskTemplateDTO} from './task-template-dto.interface';
import {BidoEquipmentDTO} from './bido-equipment-dto.interface';
import {BidoRatingDTO} from './bido-rating-dto.interface';
import {BidoFlDTO} from './bido-fl-dto.interface';
import {BireItemDTO} from './bire-item-dto.interface';
import {MaintenancePlanDTO} from './maintenance-plan-dto.interface';
import {MaintenancePlanRowDTO} from './maintenance-plan-row-dto.interface';

export interface MaintenancePlanTopRowDTO {

 	hourUsagePerDay?: Map????;
	cycleUsagePerDay?: Map????;
	tsnMinMaxByPeriodCode?: Map????;
	flightSchedule?: FlightScheduleDTO;
	taskTemplates?: TaskTemplateDTO;
	equipment?: BidoEquipmentDTO;
	rating?: BidoRatingDTO;
	countersValueByCounterCode?: Map????;
	potentialAlertsByCounterCode?: Map????;
	fl?: BidoFlDTO;
	item?: BireItemDTO;
	maintenancePlan?: MaintenancePlanDTO;
	elementsPerPeriodMap?: Map????;
	iwbEvents?: List????;
	row?: MaintenancePlanRowDTO;
	rows?: List????;
	birePlanTaskCounterDataList?: List????;
	llpGeneration?: boolean;
	startDate?: Date;
	endDate?: Date;
	
}
