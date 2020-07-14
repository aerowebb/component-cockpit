import {BireItemDTO} from './bire-item-dto.interface';
import {DOOutputDTO} from './do-output-dto.interface';

export interface DOInput {

 	withOptimizedProcess?: boolean;
	siteCodeRatingMap?: Map????;
	storeCodeRatingMap?: Map????;
	prjRepairCenterCode?: string;
	prjPriorityLevelKey?: string;
	prjStandardExchangeKey?: string;
	prjStartDate?: Date;
	kittingEndDate?: Date;
	partNumber?: string;
	quantity?: string;
	bireItemData?: BireItemDTO;
	impactedByTroubleshooting?: boolean;
	impactedByTasks?: boolean;
	impactedManually?: boolean;
	impactedByCalendarLimit?: boolean;
	impactedByLimitedPotential?: boolean;
	impactedByC2?: boolean;
	targetPN?: string;
	targetPNList?: List????;
	sentenceKey?: string;
	decisionKey?: string;
	decisionStatusKey?: string;
	output?: DOOutputDTO;
	
}
