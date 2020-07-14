import {BidoNotificationDTO} from './bido-notification-dto.interface';
import {BireTaskDTO} from './bire-task-dto.interface';
import {DeferredDefectInfoDTO} from './deferred-defect-info-dto.interface';

export interface DeferredDefectEventDTO {

 	bidoNotificationData?: BidoNotificationDTO;
	bireTaskData?: BireTaskDTO;
	workPostponementRequest?: BidoNotificationDTO;
	deferredDefectInfo?: DeferredDefectInfoDTO;
	nextTermText?: string;
	remainingText?: string;
	nextTermStatus?: number;
	projectId?: string;
	eventId?: string;
	taskCode?: string;
	taskVersion?: string;
	counterCode?: string;
	familyCode?: string;
	variantCode?: string;
	chapter?: string;
	section?: string;
	subject?: string;
	sheet?: string;
	marks?: string;
	pn?: string;
	sn?: string;
	origin?: string;
	counterRemaining?: number;
	counterValue?: number;
	topEqtTsn?: number;
	occurrence?: number;
	nteDate?: Date;
	plannedDate?: Date;
	eventBlocked?: boolean;
	
}
