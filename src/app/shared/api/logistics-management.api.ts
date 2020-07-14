import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';
@Injectable()
export class LogisticsManagementApi extends AbstractApi {
  private static readonly baseUrl: string = '/logistics_management';

  // public readonly findBsdeSitePnTilsByPnAndSiteCodes: string = super.appendToBaseUrl('/find_bsde_site_pn_tils_by_pn_and_site_codes');

  public readonly findBsdeStorePnsByPnAndStoreCodes: string =
  super.appendToBaseUrl('/find_bsde_store_pns_by_pn_and_store_codes');

  // public readonly findBsdeStorePn: string = super.appendToBaseUrl('/find_bsde_store_pn');

  // public readonly findAllBsdeSites: string = super.appendToBaseUrl('/find_all_bsde_sites');

  // public readonly findBsdeSite: string = super.appendToBaseUrl('/find_bsde_site');

  public readonly findBsdeStore: string = super.appendToBaseUrl('/find_bsde_store');

  // public readonly createBsdePn: string = super.appendToBaseUrl('/create_bsde_pn');

  // public readonly createBsdeStore: string = super.appendToBaseUrl('/create_bsde_store');

  // public readonly createBsdeSite: string = super.appendToBaseUrl('/create_bsde_site');

  // public readonly createBsdeTil: string = super.appendToBaseUrl('/create_bsde_til');

  // public readonly removeBsdePn: string = super.appendToBaseUrl('/remove_bsde_pn');

  public readonly removeBsdeStore: string = super.appendToBaseUrl('/remove_bsde_store');

  // public readonly removeBsdeSite: string = super.appendToBaseUrl('/remove_bsde_site');

  // public readonly removeBsdeTil: string = super.appendToBaseUrl('/remove_bsde_til');

  // public readonly updateBsdePn: string = super.appendToBaseUrl('/update_bsde_pn');

  // public readonly updateBsdeStore: string = super.appendToBaseUrl('/update_bsde_store');

  // public readonly updateBsdeSite: string = super.appendToBaseUrl('/update_bsde_site');

  // public readonly updateBsdeTil: string = super.appendToBaseUrl('/update_bsde_til');

  public readonly findBsdeStorePnsByStoreCode: string = super.appendToBaseUrl('/find_bsde_store_pns_by_store_code');

  // public readonly findBsdeStorePnsByPnCode: string = super.appendToBaseUrl('/find_bsde_store_pns_by_pn_code');

  public readonly findBsdeSitePnTilsBySiteCode: string = super.appendToBaseUrl('/find_bsde_site_pn_tils_by_site_code');

  // public readonly findBsdeSitePnTilsByPnCode: string = super.appendToBaseUrl('/find_bsde_site_pn_tils_by_pn_code');

  public readonly findAllBsdeStores: string = super.appendToBaseUrl('/find_all_bsde_stores');

  // public readonly createBsdeStorePn: string = super.appendToBaseUrl('/create_bsde_store_pn');

  // public readonly findAllBsdeStockTypes: string = super.appendToBaseUrl('/find_all_bsde_stock_types');

  // public readonly createBsdeStockType: string = super.appendToBaseUrl('/create_bsde_stock_type');

  // public readonly removeBsdeStockType: string = super.appendToBaseUrl('/remove_bsde_stock_type');

  // public readonly createBsdeSitePnTil: string = super.appendToBaseUrl('/create_bsde_site_pn_til');

  // public readonly removeBsdeStorePn: string = super.appendToBaseUrl('/remove_bsde_store_pn');

  // public readonly removeBsdeStorePnByPnCode: string = super.appendToBaseUrl('/remove_bsde_store_pn_by_pn_code');

  // public readonly removeBsdeSitePnTil: string = super.appendToBaseUrl('/remove_bsde_site_pn_til');

  // public readonly removeBsdeSitePnTilByPnCode: string = super.appendToBaseUrl('/remove_bsde_site_pn_til_by_pn_code');

  // public readonly updateBsdeStorePn: string = super.appendToBaseUrl('/update_bsde_store_pn');

  // public readonly updateBsdeSitePnTil: string = super.appendToBaseUrl('/update_bsde_site_pn_til');

  // public readonly findBsdeSitesByPnCode: string = super.appendToBaseUrl('/find_bsde_sites_by_pn_code');

  // public readonly findBsdeStoresByPnCode: string = super.appendToBaseUrl('/find_bsde_stores_by_pn_code');

  public readonly saveInventoryByWarehouse: string = super.appendToBaseUrl('/save_inventory_by_warehouse');

  public constructor() {
    super(LogisticsManagementApi.baseUrl);
  }
}
