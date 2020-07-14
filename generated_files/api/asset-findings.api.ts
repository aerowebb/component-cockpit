import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class AssetFindingsApi extends AbstractApi {

	private static readonly baseUrl: string = '/asset_findings';

	// public readonly exportBsdeFindingsReportPdf: string = super.appendToBaseUrl('/export_bsde_findings_report_pdf');

	// public readonly exportBidmFindingsReportPdf: string = super.appendToBaseUrl('/export_bidm_findings_report_pdf');


	public constructor() {
		super(AssetFindingsApi.baseUrl);
	}

}