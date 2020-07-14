import {BidmWorkOrderDTO} from './bidm-work-order-dto.interface';
import {BidoEquipmentDTO} from './bido-equipment-dto.interface';
import {CostAndDurationDTO} from './cost-and-duration-dto.interface';
import {BidoNotificationDTO} from './bido-notification-dto.interface';

export interface WorkOrderStatusDetail {

 	bidmWorkOrderData?: BidmWorkOrderDTO;
	bidoEquipmentData?: BidoEquipmentDTO;
	taskType?: string;
	taskZone?: string;
	taskDesignation?: string;
	pnSnKey?: string;
	status?: string;
	startDate?: Date;
	endDate?: Date;
	componentsNeeded?: List????;
	sparePartsNeeded?: List????;
	expandablePartsNeeded?: List????;
	bireOperationDataList?: List????;
	bidmOperationDataList?: List????;
	bireTaskEvolutionDataList?: List????;
	bidoNotificationDataTaskAppliedList?: List????;
	bidoNotificationDataEvolutionAppliedList?: List????;
	stockMvtDataPartList?: List????;
	stockMvtDataList?: List????;
	costAndDuration?: CostAndDurationDTO;
	isCritical?: boolean;
	isMaintenancePlanUpToDate?: boolean;
	isAssetStructureUpToDate?: boolean;
	workPostponementRequestBidoNotificationData?: BidoNotificationDTO;
	childWorkOrderStatusDetail?: List????;
	
}
