
export interface DOOutputDTO {

 	senRemovedInActualConfig?: boolean;
	senDamagedInActualConfig?: boolean;
	senMissedInActualConfig?: boolean;
	senOverhaulInActualConfig?: boolean;
	senServiceableInActualConfig?: boolean;
	invId?: string;
	decisionKey?: string;
	decisionStatusKey?: string;
	decisionReasonCode?: string;
	doKPourcents?: List????;
	doSites?: List????;
	doStores?: List????;
	doDecisions?: List????;
	constraintKittingEndDate?: Date;
	constraintSystematicScrap?: boolean;
	constraintStandardExchange?: boolean;
	constraintCostPriority?: boolean;
	
}
