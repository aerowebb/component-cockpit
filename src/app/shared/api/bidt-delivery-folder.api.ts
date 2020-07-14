import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class BidtDeliveryFolderApi extends AbstractApi {
  private static readonly baseUrl: string = '/bidt_delivery_folder';

  public readonly addOrUpdateReceiptFolder: string = super.appendToBaseUrl('/add_or_update_receipt_folder');

  public readonly addOrUpdateShipmentFolder: string = super.appendToBaseUrl('/add_or_update_shipment_folder');

  public readonly addReceiptItem: string = super.appendToBaseUrl('/add_receipt_item');

  public readonly addReceiptMaterialList: string = super.appendToBaseUrl('/add_receipt_material_list');

  public readonly addReceiptPackage: string = super.appendToBaseUrl('/add_receipt_package');

  public readonly cancelItemOperations: string = super.appendToBaseUrl('/cancel_item_operations');

  public readonly cancelPackageOperations: string = super.appendToBaseUrl('/cancel_package_operations');

  public readonly cancelStockMovementOperations: string = super.appendToBaseUrl('/cancel_stock_movement_operations');

  public readonly deleteDeliveryFolder: string = super.appendToBaseUrl('/delete_delivery_folder');

  public readonly deleteReceiptItem: string = super.appendToBaseUrl('/delete_receipt_item');

  public readonly deleteReceiptMaterial: string = super.appendToBaseUrl('/delete_receipt_material');

  public readonly deleteReceiptPackage: string = super.appendToBaseUrl('/delete_receipt_package');

  public readonly findDeliveryFoldersByCriteria: string = super.appendToBaseUrl('/find_delivery_folders_by_criteria');

  public readonly findByPackageCode: string = super.appendToBaseUrl('/find_by_package_code');

  public readonly findReceiptFolderByPackageCode: string = super.appendToBaseUrl(
    '/find_receipt_folder_by_package_code'
  );

  public readonly findReceiptFolderWithAllObjectsById: string = super.appendToBaseUrl(
    '/find_receipt_folder_with_all_objects_by_id'
  );

  public readonly findShipmentFolderWithAllObjectsById: string = super.appendToBaseUrl(
    '/find_shipment_folder_with_all_objects_by_id'
  );

  public readonly performPackageOperations: string = super.appendToBaseUrl('/perform_package_operations');

  public readonly performItemOperations: string = super.appendToBaseUrl('/perform_item_operations');

  public readonly performStockMovementOperations: string = super.appendToBaseUrl('/perform_stock_movement_operations');

  public readonly putInLitigationItemOperations: string = super.appendToBaseUrl('/put_in_litigation_item_operations');

  public readonly putInLitigationPackageOperations: string = super.appendToBaseUrl(
    '/put_in_litigation_package_operations'
  );

  public readonly putInLitigationStockMovementOperations: string = super.appendToBaseUrl(
    '/put_in_litigation_stock_movement_operations'
  );

  public readonly findShipmentMaterial: string = super.appendToBaseUrl('/find_shipment_Material');

  public readonly saveDocuments: string = super.appendToBaseUrl('/save_delivery_folder_documents');

  public readonly addAssetToShipmentFolder: string = super.appendToBaseUrl('/add_asset_to_shipment_folder');

  public readonly addShipmentPackage: string = super.appendToBaseUrl('/add_shipment_package');

  public readonly updateShipmentPackage: string = super.appendToBaseUrl('/update_package');

  public readonly updateShipmentFolderStatus: string = super.appendToBaseUrl('/update_shipment_folder_status');

  public readonly deleteShipmentItem: string = super.appendToBaseUrl('/delete_shipment_item');

  public readonly deleteShipmentAsset: string = super.appendToBaseUrl('/delete_shipment_asset');

  public readonly updateItemsStatus: string = super.appendToBaseUrl('/update_items_status');

  public readonly findNextMvtReceiptFolder: string = super.appendToBaseUrl('/find_next_mvt_receipt_folder');

  public readonly fetchLengthUnitMap: string = super.appendToBaseUrl('/fetch_length_unit_map');

  public readonly fetchWeightUnitMap: string = super.appendToBaseUrl('/fetch_weight_unit_map');

  public readonly calculateShipmentFolderCriticality: string = super.appendToBaseUrl(
    '/calculate_shipment_folder_criticality'
  );

  public constructor() {
    super(BidtDeliveryFolderApi.baseUrl);
  }
}
