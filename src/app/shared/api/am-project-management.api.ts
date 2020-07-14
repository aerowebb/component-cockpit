import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class AMProjectManagementApi extends AbstractApi {
  private static readonly baseUrl: string = '/a_m_project_management';

  // public readonly findBidmProjectsByAssetCodeAndWoAssetPnAndWoAssetSnAndWoSource: string = super.appendToBaseUrl('/find_bidm_projects_by_asset_code_and_wo_asset_pn_and_wo_asset_sn_and_wo_source');

  // public readonly findBidmProjectsByWoAssetPnAndWoAssetSnAndWoSource: string = super.appendToBaseUrl('/find_bidm_projects_by_wo_asset_pn_and_wo_asset_sn_and_wo_source');

  // public readonly findBidmProjectsWithLinkedObjetsByProjectCriteria: string = super.appendToBaseUrl('/find_bidm_projects_with_linked_objets_by_project_criteria');

  public readonly createBidmProject: string = super.appendToBaseUrl('/create_bidm_project');

  public readonly updateBidmProject: string = super.appendToBaseUrl('/update_bidm_project');

  public readonly checkAcrsEventForBidmProject: string = super.appendToBaseUrl('/check_acrs_event_for_bidm_project');

  public readonly removeBidmProject: string = super.appendToBaseUrl('/remove_bidm_project');

  public readonly removeBidmProjectAttribute: string = super.appendToBaseUrl('/remove_bidm_project_attribute');

  public readonly findBidmProjectWithLinkedObjects: string = super.appendToBaseUrl(
    '/find_bidm_project_with_linked_objects'
  );

  public readonly generateFAACertificate: string = super.appendToBaseUrl('/generate_faa_certificate');

  public readonly generateEASACertificate: string = super.appendToBaseUrl('/generate_easa_certificate');

  // public readonly generateTCCACertificate: string = super.appendToBaseUrl('/generate_tcca_certificate');

  public readonly generateAPRSCertificate: string = super.appendToBaseUrl('/generate_aprs_certificate');

  // public readonly generateAssetWorkXml: string = super.appendToBaseUrl('/generate_asset_work_xml');

  public readonly generateAssetWorkXmlAlternate: string = super.appendToBaseUrl('/generate_asset_work_xml_alternative');

  // public readonly generateAssetWorkPdf: string = super.appendToBaseUrl('/generate_asset_work_pdf');

  public readonly generateWorkPackageReport: string = super.appendToBaseUrl('/generate_work_package_report');

  public readonly createBidmProjectAttribute: string = super.appendToBaseUrl('/create_bidm_project_attribute');

  // public readonly createBidmProjectWithBidmWorkOrderList: string = super.appendToBaseUrl('/create_bidm_project_with_bidm_work_order_list');

  // public readonly createOrUpdateBidmProjectWithBidmWorkOrderList: string = super.appendToBaseUrl('/create_or_update_bidm_project_with_bidm_work_order_list');

  // public readonly removeBidmProjectsByProjectCriteria: string = super.appendToBaseUrl('/remove_bidm_projects_by_project_criteria');

  public readonly findAllBidmProjectByProjectCriteria: string = super.appendToBaseUrl(
    '/find_bidm_projects_by_project_criteria'
  );

  public readonly findBidmProjectsByProjectCriteriaWithMaxResult: string = super.appendToBaseUrl(
    '/find_bidm_projects_by_project_criteria_with_max_result'
  );

  public readonly getBsdeProjectDateCriteria: string = super.appendToBaseUrl('/get_bsde_project_date_criteria');

  // public readonly findBidmProjectsByAssetCodeAndTaskCode: string = super.appendToBaseUrl('/find_bidm_projects_by_asset_code_and_task_code');

  // public readonly findBidmProjectsByAssetCodeAndEventCode: string = super.appendToBaseUrl('/find_bidm_projects_by_asset_code_and_event_code');

  // public readonly findBidmProjectsByAssetCodeAndWoSource: string = super.appendToBaseUrl('/find_bidm_projects_by_asset_code_and_wo_source');

  public readonly findBidmProjectAttributesByWorkOrder: string = super.appendToBaseUrl(
    '/find_bidm_project_attributes_by_work_order'
  );

  public readonly findBidmProject: string = super.appendToBaseUrl('/find_bidm_project');
  public readonly findBidmProjectWithAttributesId: string = super.appendToBaseUrl(
    '/find_bidm_project_with_attributes_id'
  );

  public readonly findWorkPackageSchedulingList: string = super.appendToBaseUrl('/find_work_package_scheduling_list');

  public readonly generateJobcard: string = super.appendToBaseUrl('/generate_jobcard');

  public readonly generateJobcards: string = super.appendToBaseUrl('/generate_jobcards');

  public readonly getBsdeProjectData: string = super.appendToBaseUrl('/get_bsde_project_data');

  public readonly createWorkbenchInspection: string = super.appendToBaseUrl('/create_workbench_inspection');

  public readonly findUnfinishedProjectByEquipmentCode: string = super.appendToBaseUrl(
    '/find_unfinished_bidm_project_by_equipment_code'
  );

  public constructor() {
    super(AMProjectManagementApi.baseUrl);
  }
}
