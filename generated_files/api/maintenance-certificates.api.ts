import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class MaintenanceCertificatesApi extends AbstractApi {

	private static readonly baseUrl: string = '/maintenance_certificates';

	// public readonly generateAircraftLogbook: string = super.appendToBaseUrl('/generate_aircraft_logbook');

	// public readonly generateEngineLogbook: string = super.appendToBaseUrl('/generate_engine_logbook');

	// public readonly generateFAACertificate: string = super.appendToBaseUrl('/generate_faa_certificate');

	// public readonly generateEASACertificate: string = super.appendToBaseUrl('/generate_easa_certificate');

	// public readonly generateTCCACertificate: string = super.appendToBaseUrl('/generate_tcca_certificate');

	// public readonly generateAPRSCertificate: string = super.appendToBaseUrl('/generate_aprs_certificate');

	// public readonly generateWorkPackageReport: string = super.appendToBaseUrl('/generate_work_package_report');

	// public readonly generateJobcard: string = super.appendToBaseUrl('/generate_jobcard');

	// public readonly generateAssetWork: string = super.appendToBaseUrl('/generate_asset_work');

	// public readonly getAssetWorkData: string = super.appendToBaseUrl('/get_asset_work_data');


	public constructor() {
		super(MaintenanceCertificatesApi.baseUrl);
	}

}