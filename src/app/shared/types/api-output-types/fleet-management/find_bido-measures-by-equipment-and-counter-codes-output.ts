export interface FindBidoMeasuresByEquipmentAndCounterCodesOutput {


equipmentRepresentation ?:	string;
measureId	 ?: string;
equipmentCode	 ?: string;
familyCode	 ?: string;
ratingCode	 ?: string;
ratingText ?:	string;
counterCode	 ?: string;
readingDate	 ?: Date;
source ?:	string;
isDiff ?:	boolean;
counterUnit	?: string;
value	?: string;
cumulatedCounterValue?:	string;
delta	?: string;
bidMeasureId ? :	number;
status ? :	string;
coefficient ? :	number;
measureDescription ? :	string;
statusState	? : string;
statusUser ? :	string;
statusDate ? :	Date;
correctMeasureEnable ? :	boolean;
propagateMeasureEnabled ? :	boolean;
cancelMeasureEnabled ? :	boolean;
valueInterRating?: number;
}
