import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class AssetManagementApi extends AbstractApi {
  private static readonly baseUrl: string = '/asset_management';

  public readonly searchEquipmentList: string = super.appendToBaseUrl('/search_asset_by_criteria');

  public readonly getAssetByCode: string = super.appendToBaseUrl('/fetch_asset_by_code');

  public readonly getSubEquipments: string = super.appendToBaseUrl('/subequipments');

  public readonly getEvents: string = super.appendToBaseUrl('/events');

  public readonly getEvolutions: string = super.appendToBaseUrl('/evolutions');

  public readonly createAsset: string = super.appendToBaseUrl('/create_asset');

  public readonly updateAsset: string = super.appendToBaseUrl('/update_asset');

  public readonly createBidoNotification: string = super.appendToBaseUrl('/create_bido_notification');

  public readonly findAssetByDate: string = super.appendToBaseUrl('/find_hf_bido_equipment_by_equipment_code');

  public readonly updatePopupFieldEquipent: string = super.appendToBaseUrl('/update_pop_up_fields_equipment');

  public readonly generateLogCardEquipment: string = super.appendToBaseUrl('/generate_log_card');

  public readonly generateLogBook: string = super.appendToBaseUrl('/generate_log_book');

  public readonly generateLlp: string = super.appendToBaseUrl('/generate_xls_llp_sheet');

  public readonly generateAdsb: string = super.appendToBaseUrl('/generate_xls_adsb_status');

  public readonly generateDefectCard: string = super.appendToBaseUrl('/generate_defect_card');

  public readonly findAllBidoNotificationTypeByTypeCategory: string = super.appendToBaseUrl(
    '/find_all_bido_notification_type_by_type_category'
  );

  public readonly addMeasure: string = super.appendToBaseUrl('/add_measure');

  public readonly fetchMeasureTableData: string = super.appendToBaseUrl('/fetch_measure_table_data');

  public readonly getLLPPotential: string = super.appendToBaseUrl('/get_llp_potential');

  public readonly fetchGroundEquipmentFunctionList: string = super.appendToBaseUrl(
    '/fetch_ground_equipment_function_list'
  );

  public readonly findGroundEquipmentsBySearchCriteria: string = super.appendToBaseUrl(
    '/find_ground_equipments-by-search-criteria'
  );

  public readonly getManufacturingBatchByEquipment: string = super.appendToBaseUrl(
    'get_manufacturing_batch_by_equipment'
  );

  public constructor() {
    super(AssetManagementApi.baseUrl);
  }
}
