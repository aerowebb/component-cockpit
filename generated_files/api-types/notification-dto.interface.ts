import {NotificationDTO$TaskDTO} from './notification-dto-$-task-dto.interface';
import {NotificationDTO$DamageAndLocalisationDTO} from './notification-dto-$-damage-and-localisation-dto.interface';

export interface NotificationDTO {

 	notificationNumber?: string;
	orderNumber?: string;
	pn?: string;
	decision?: string;
	site?: string;
	siteCode?: string;
	targetPn?: string;
	quantityOut?: string;
	equipmentNumber?: string;
	ataCode?: string;
	sn?: string;
	otp?: string;
	customerNumber?: string;
	customerName?: string;
	variantName?: string;
	functionCode?: string;
	familyName?: string;
	sentence?: string;
	quantityIn?: string;
	tasks?: NotificationDTO$TaskDTO;
	damagesAndLocalisations?: NotificationDTO$DamageAndLocalisationDTO;
	
}
