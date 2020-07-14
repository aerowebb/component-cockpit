import {BidoCustomerDTO} from './bido-customer-dto.interface';
import {BidoCustomerDTO} from './bido-customer-dto.interface';
import {BidoEquipmentDTO} from './bido-equipment-dto.interface';

export interface HFBidoEquipmentDTO {

 	dateOfChange?: Date;
	equipmentCode?: string;
	pn?: string;
	sn?: string;
	familyVariantCode?: string;
	registration?: string;
	modelCode?: string;
	operationalStatus?: string;
	familyRatingCode?: string;
	zone?: string;
	country?: string;
	equEquipmentCode?: string;
	fatherEquipmentRepresentation?: string;
	owner?: BidoCustomerDTO;
	operator?: BidoCustomerDTO;
	installationDate?: number;
	currentBidoEquipmentData?: BidoEquipmentDTO;
	isPnChange?: boolean;
	isSnChange?: boolean;
	isFamilyVariantCodeChange?: boolean;
	isRegistrationChange?: boolean;
	isModelCodeChange?: boolean;
	isOperationalStatusChange?: boolean;
	isFamilyRatingCodeChange?: boolean;
	isEquEquipmentCodeChange?: boolean;
	isOwnerChange?: boolean;
	isOperatorChange?: boolean;
	isZoneChange?: boolean;
	isCountryChange?: boolean;
	statusState?: string;
	statusUser?: string;
	statusDate?: Date;
	
}
