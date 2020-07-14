export interface CalculatePotentialAlertsByCounterAndRatingOutput {

equipmentCode?:	string;
counterCode?:	string;
value?:	string;
unitCode?:	string;
potentialAlertLevelInt?:	number;
ratingText?:	string;
minRemainPercent?:	number;
remainingValue?:	string;
formattedRemainingValue?:	string;
limit?:	string;
dateLimit	?: Date;
readingDate?:	Date;
source?:	string;
status?:	string;
statusDate?:	string;
statusUser?:	string;
statusState?:	string;
equipmentRepresentation?:	string;
alertTooltipPercent	?: string;
alertTooltipCode?:	string;
alertIcon	?: string;

}
