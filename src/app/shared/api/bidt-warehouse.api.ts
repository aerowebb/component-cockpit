import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class BidtWarehouseApi extends AbstractApi {
  private static readonly baseUrl: string = '/bidt_warehouse';

  public readonly findAll: string = super.appendToBaseUrl('/find_all');

  public readonly findByCriteria: string = super.appendToBaseUrl('/find_by_criteria');

  public readonly findByProduct: string = super.appendToBaseUrl('/find_by_product');

  // public readonly findByWarehouseTypeAndSiteCode: string = super.appendToBaseUrl('/find_by_warehouse_type_and_site_code');

  public readonly delete: string = super.appendToBaseUrl('/delete');

  public readonly getById: string = super.appendToBaseUrl('/get_by_id');

  public readonly findBidtWarehouseById: string = super.appendToBaseUrl('/find_bidt_warehouse_by_id');

  // public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');

  public readonly findBySiteId: string = super.appendToBaseUrl('/find_by_site_id');

  // public readonly deleteBySiteId: string = super.appendToBaseUrl('/delete_by_site_id');

  public readonly getWarehouses: string = super.appendToBaseUrl('/find_all_asset');

  public readonly findByCriteriaWarehouse: string = super.appendToBaseUrl('/find_by_criteria_warehouse');

  public readonly findByCriteriaWorkshop: string = super.appendToBaseUrl('/find_by_criteria_workshop');

  public readonly fillListSite: string = super.appendToBaseUrl('/fill_list_site');

  public readonly fillListCompanies: string = super.appendToBaseUrl('/fill_list_companies');

  public readonly fillListSupplyingWarehouses: string = super.appendToBaseUrl('/fill_list_supplying_warehouses');

  public readonly saveWarehouse: string = super.appendToBaseUrl('/save_warehouse');

  public readonly findAllAsset: string = super.appendToBaseUrl('/find_all_asset');

  public readonly getTargetDays: string = super.appendToBaseUrl('/get_target_days');

  public readonly findAllWarehouseForRemoval: string = super.appendToBaseUrl('/find_all_warehouse_for_removal');

  public readonly findAllWarehouseForRemovalWithData: string = super.appendToBaseUrl(
    '/find_all_warehouse_for_removal_with_data'
  );

  public readonly findAllWarehouseByUserRights: string = super.appendToBaseUrl('/find_all_warehouse_by_user_rights');

  public readonly findAllByWarehouseCategory: string = super.appendToBaseUrl('/find_all_by_warehouse_category');

  public readonly findAllByWorkshopCategory: string = super.appendToBaseUrl('/find_all_by_workshop_category');

  public readonly findByMandantAndSiteCode: string = super.appendToBaseUrl('/find_by_mandant_and_site_code');

  public constructor() {
    super(BidtWarehouseApi.baseUrl);
  }
}
