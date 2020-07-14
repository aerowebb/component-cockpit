import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class BidtProcurementRequestApi extends AbstractApi {
  private static readonly baseUrl: string = '/bidt_procurement_request';

  public readonly checkQuantityConsistency: string = super.appendToBaseUrl('/check_quantity_consistency');

  public readonly duplicate: string = super.appendToBaseUrl('/duplicate');

  public readonly updateProcurementRequestItemQuantity: string = super.appendToBaseUrl('/update_item_quantity');

  public readonly addMaterial: string = super.appendToBaseUrl('/add_material');

  public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');

  public readonly addOrUpdateItem: string = super.appendToBaseUrl('/add_or_update_item');

  public readonly cancel: string = super.appendToBaseUrl('/cancel');

  public readonly delete: string = super.appendToBaseUrl('/delete');

  public readonly findProcurementRequestsByCriteria: string = super.appendToBaseUrl(
    '/find_procurement_requests_by_criteria'
  );

  public readonly findProcurementRequestsByWoId: string = super.appendToBaseUrl('/find_procurement_requests_by_wo_id');

  public readonly findWithAllObjectsById: string = super.appendToBaseUrl('/find_with_all_objects_by_id');

  public readonly searchGlobalCandidateAssets: string = super.appendToBaseUrl('/search_global_candidate_assets');

  public readonly searchLocalCandidateAssets: string = super.appendToBaseUrl('/search_local_candidate_assets');

  public readonly searchWarehouseCandidateAssets: string = super.appendToBaseUrl('/search_warehouse_candidate_assets');

  public readonly searchCandidateAssetsForCannibalism: string = super.appendToBaseUrl(
    '/search_candidate_assets_for_cannibalism'
  );

  public readonly cannibalizeAsset: string = super.appendToBaseUrl('/cannibalize_asset');

  public readonly bookCandidateAsset: string = super.appendToBaseUrl('/book_candidate_asset');

  public readonly preemptCandidateAsset: string = super.appendToBaseUrl('/preempt_candidate_asset');

  public readonly cancelBookedAsset: string = super.appendToBaseUrl('/cancel_booked_asset');

  public readonly isAssetBooked: string = super.appendToBaseUrl('/is_asset_booked');

  public readonly createProcurementRequest: string = super.appendToBaseUrl('create_procurement_request_without_origin');

  public readonly createProcurementRequestItem: string = super.appendToBaseUrl('create_procurement_request_item');

  public readonly saveProcurementRequestDocuments: string = super.appendToBaseUrl('save_procurement_request_documents');

  public readonly findProcurementRequestStockQuantityIndicators: string = super.appendToBaseUrl(
    'find_procurement_requests_and_stock_quantity_indicators'
  );

  public readonly updateProcurementRequestReceiver: string = super.appendToBaseUrl(
    'update_procurement_request_receiver'
  );

  public readonly calculateRemainingQuantity: string = super.appendToBaseUrl('/calculate_remaining_quantity');

  public constructor() {
    super(BidtProcurementRequestApi.baseUrl);
  }
}
