import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class FlightScheduleApi extends AbstractApi {

	private static readonly baseUrl: string = '/flight_schedule';

	// public readonly exportGantt: string = super.appendToBaseUrl('/export_gantt');

	// public readonly getHighestOccurrenceNumberByEquipmentAndMissionCodes: string = super.appendToBaseUrl('/get_highest_occurrence_number_by_equipment_and_mission_codes');

	// public readonly getPlannedMissions: string = super.appendToBaseUrl('/get_planned_missions');


	public constructor() {
		super(FlightScheduleApi.baseUrl);
	}

}