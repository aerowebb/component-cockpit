import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class LogisticsBusinessApi extends AbstractApi {

	private static readonly baseUrl: string = '/logistics_business';

	// public readonly getAvailableHoursForMaintenanceByPeriod: string = super.appendToBaseUrl('/get_available_hours_for_maintenance_by_period');

	// public readonly getStockNameByType: string = super.appendToBaseUrl('/get_stock_name_by_type');

	// public readonly getAvailableResourcesByPeriod: string = super.appendToBaseUrl('/get_available_resources_by_period');

	// public readonly generateStockMovementCard: string = super.appendToBaseUrl('/generate_stock_movement_card');


	public constructor() {
		super(LogisticsBusinessApi.baseUrl);
	}

}