import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class BidtTransferOrderApi extends AbstractApi {
  private static readonly baseUrl: string = '/bidt_transfer_order';

  public readonly create: string = super.appendToBaseUrl('/create');

  public readonly addOrUpdateTransferOrder: string = super.appendToBaseUrl('/add_or_update');

  public readonly findTransferOrdersByCriteria: string = super.appendToBaseUrl('/find_transfer_orders_by_criteria');

  public readonly findTransferOrderById: string = super.appendToBaseUrl('/find_transfer_order_by_id');

  public readonly validateSendToRepair: string = super.appendToBaseUrl('/validate_send_to_repair');

  public readonly searchWarehouseCandidateAssets: string = super.appendToBaseUrl('search_warehouse_candidate_assets');

  public readonly searchGlobalCandidateAssets: string = super.appendToBaseUrl('/search_global_candidate_assets');

  public readonly searchLocalCandidateAssets: string = super.appendToBaseUrl('/search_local_candidate_assets');

  public readonly bookCandidateAsset: string = super.appendToBaseUrl('/book_candidate_asset');

  public readonly cancelBookedAsset: string = super.appendToBaseUrl('/cancel_booked_asset');

  public readonly preemptCandidateAsset: string = super.appendToBaseUrl('/preempt_candidate_asset');

  public readonly isAssetBooked: string = super.appendToBaseUrl('/is_asset_booked');

  public readonly findByRemoval: string = super.appendToBaseUrl('/find_by_removal');

  public readonly cancelTransferOrder: string = super.appendToBaseUrl('/cancel_transfer_order');

  public readonly updateTorItemQuantity: string = super.appendToBaseUrl('/update_item_quantity');

  public constructor() {
    super(BidtTransferOrderApi.baseUrl);
  }
}
