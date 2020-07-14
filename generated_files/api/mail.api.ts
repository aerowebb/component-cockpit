import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class MailApi extends AbstractApi {

	private static readonly baseUrl: string = '/mail';

	// public readonly setUserExits: string = super.appendToBaseUrl('/set_user_exits');

	// public readonly sendEventNotificationToContacts: string = super.appendToBaseUrl('/send_event_notification_to_contacts');

	// public readonly sendEventNotificationToContacts: string = super.appendToBaseUrl('/send_event_notification_to_contacts');

	// public readonly sendBidoFmdToContacts: string = super.appendToBaseUrl('/send_bido_fmd_to_contacts');

	// public readonly sendBireAdSbToContacts: string = super.appendToBaseUrl('/send_bire_ad_sb_to_contacts');

	// public readonly sendMaintenanceNotificationToContacts: string = super.appendToBaseUrl('/send_maintenance_notification_to_contacts');

	// public readonly sendMaintenanceNotificationToContacts: string = super.appendToBaseUrl('/send_maintenance_notification_to_contacts');

	// public readonly sendBidoMissionEquipmentToContacts: string = super.appendToBaseUrl('/send_bido_mission_equipment_to_contacts');

	// public readonly sendMail: string = super.appendToBaseUrl('/send_mail');

	// public readonly sendMail: string = super.appendToBaseUrl('/send_mail');


	public constructor() {
		super(MailApi.baseUrl);
	}

}