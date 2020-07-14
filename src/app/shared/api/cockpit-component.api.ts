import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class CockpitComponentApi extends AbstractApi {
  private static readonly baseUrl: string = '/cockpit_component';

  public readonly getCockpitInspection: string = super.appendToBaseUrl('/get_cockpit_inspection');

  public readonly getTechnicalQuotation: string = super.appendToBaseUrl('/get_technical_quotation');

  public readonly getSubAssemblySiblingList: string = super.appendToBaseUrl('/get_sub_assembly_sibling_list');

  public readonly getSentenceList: string = super.appendToBaseUrl('/get_sentence_list');

  public readonly getDecisionList: string = super.appendToBaseUrl('/get_decision_list');

  public readonly generateInspectionPDF: string = super.appendToBaseUrl('/generate_inspection_pdf');

  public readonly getSentenceAndDecisionList: string = super.appendToBaseUrl('/get_sentence_decision_list');

  public readonly addListPn: string = super.appendToBaseUrl('/add_list_pn');

  public readonly loadFindingsList: string = super.appendToBaseUrl('/load_findings_list');

  public readonly fetchMatchingIcon: string = super.appendToBaseUrl('/fetch_matching_result_icon');

  public constructor() {
    super(CockpitComponentApi.baseUrl);
  }
}
