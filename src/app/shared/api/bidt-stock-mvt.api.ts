import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class BidtStockMvtApi extends AbstractApi {
  private static readonly baseUrl: string = '/bidt_stock_mvt';

  public readonly deleteMaterial: string = super.appendToBaseUrl('/delete_material');

  public readonly generateStockMovementCard: string = super.appendToBaseUrl('/generate_stock_movement_card');

  public readonly findAllBidtStockMvtByCriteria: string = super.appendToBaseUrl('/find_all_bidt_stock_mvt_by_criteria');

  public readonly createStockIssue: string = super.appendToBaseUrl('/create_stock_issue');

  public readonly createStockReceipt: string = super.appendToBaseUrl('/create_stock_receipt');

  public readonly createStockTransfert: string = super.appendToBaseUrl('/create_stock_transfert');

  // public readonly createPlannedStockMovement: string = super.appendToBaseUrl('/create_planned_stock_movement');

  // public readonly createPlannedStockMovement: string = super.appendToBaseUrl('/create_planned_stock_movement');

  // public readonly updateEntity: string = super.appendToBaseUrl('/update_entity');

  // public readonly findEntitiesByCriteria: string = super.appendToBaseUrl('/find_entities_by_criteria');

  // public readonly getCurrentStockLocationOfEquipement: string = super.appendToBaseUrl('/get_current_stock_location_of_equipement');

  public readonly getQuantityInStock: string = super.appendToBaseUrl('/get_quantity_in_stock');

  public readonly getQuantityInStockBySite: string = super.appendToBaseUrl('/get_quantity_in_stock_by_site');

  public readonly controlStock: string = super.appendToBaseUrl('/control_stock');

  // public readonly getQuantityInStockByDay: string = super.appendToBaseUrl('/get_quantity_in_stock_by_day');

  // public readonly getSerialNumberList: string = super.appendToBaseUrl('/get_serial_number_list');

  // public readonly getBatchNumberList: string = super.appendToBaseUrl('/get_batch_number_list');

  // public readonly getStockInformationList: string = super.appendToBaseUrl('/get_stock_information_list');

  // public readonly getBidoEquipmentsByCriteria: string = super.appendToBaseUrl('/get_bido_equipments_by_criteria');

  // public readonly delete: string = super.appendToBaseUrl('/delete');

  // public readonly findByWarehouseId: string = super.appendToBaseUrl('/find_by_warehouse_id');

  public readonly getById: string = super.appendToBaseUrl('/get_by_id');

  public readonly findByPurchaseRequestId: string = super.appendToBaseUrl('/find_by_purchase_request_id');

  public readonly addOrUpdate: string = super.appendToBaseUrl('/add_or_update');

  // public readonly findBySalesRequestId: string = super.appendToBaseUrl('/find_by_sales_request_id');

  // public readonly deleteBySalesRequestId: string = super.appendToBaseUrl('/delete_by_sales_request_id');

  // public readonly deleteByStockMvtId: string = super.appendToBaseUrl('/delete_by_stock_mvt_id');

  // public readonly deleteByPurchaseRequestId: string = super.appendToBaseUrl('/delete_by_purchase_request_id');

  // public readonly findByValuationGroupId: string = super.appendToBaseUrl('/find_by_valuation_group_id');

  // public readonly deleteByValuationGroupId: string = super.appendToBaseUrl('/delete_by_valuation_group_id');

  // public readonly findByExternalUserId: string = super.appendToBaseUrl('/find_by_external_user_id');

  // public readonly deleteByExternalUserId: string = super.appendToBaseUrl('/delete_by_external_user_id');

  // public readonly findByStockTypeId: string = super.appendToBaseUrl('/find_by_stock_type_id');

  // public readonly deleteByStockTypeId: string = super.appendToBaseUrl('/delete_by_stock_type_id');

  // public readonly findByStorageBinId: string = super.appendToBaseUrl('/find_by_storage_bin_id');

  // public readonly deleteByStorageBinId: string = super.appendToBaseUrl('/delete_by_storage_bin_id');

  // public readonly deleteByWarehouseId: string = super.appendToBaseUrl('/delete_by_warehouse_id');

  // public readonly findByStockMvtId: string = super.appendToBaseUrl('/find_by_stock_mvt_id');

  public readonly findAllDefectPartsByCriteria: string = super.appendToBaseUrl('/find_all_defect_parts_by_criteria');

  public readonly findAlerts: string = super.appendToBaseUrl('/find_alerts');

  public readonly findssTreeNode: string = super.appendToBaseUrl('/stock_status_tree_node');

  public readonly findPurchaseDocumentCategory: string = super.appendToBaseUrl('purchase_document_category');

  public readonly findstockstatusgraph: string = super.appendToBaseUrl('stock_status_graph');

  public readonly getStockInformationList: string = super.appendToBaseUrl('get_stock_information_list');

  public readonly getStockInformationListByCriteria: string = super.appendToBaseUrl(
    'get_stock_information_list_by_criteria'
  );

  public readonly findAllGoodMovement: string = super.appendToBaseUrl('find_all_good_movement');

  public readonly changePnAccordingToVsb: string = super.appendToBaseUrl('change_pn_according_to_vsb');

  public readonly getPotentialList: string = super.appendToBaseUrl('get_potential_list');

  public readonly addOrUpdateStockMvt: string = super.appendToBaseUrl('/add_or_update_stock_mvt');

  public readonly addOrUpdateStockMvtStatus: string = super.appendToBaseUrl('/add_or_update_stock_mvt_status');

  public readonly getGoodMovement: string = super.appendToBaseUrl('/get_good_movement');

  public readonly findByCriteria: string = super.appendToBaseUrl('/find_by_criteria');

  public readonly updateStatus: string = super.appendToBaseUrl('/update_status');

  public readonly updateMovementsStatus: string = super.appendToBaseUrl('/update_movements_status');

  public readonly putStockMvtPending: string = super.appendToBaseUrl('/put_stock_mvt_pending');

  public readonly cancelStockMvtPending: string = super.appendToBaseUrl('/cancel_stock_mvt_pending');

  public readonly findStockMvtStory: string = super.appendToBaseUrl('/find_stock_mvt_story');

  public readonly findStockMvtStoryFromFirstStockMvt: string = super.appendToBaseUrl(
    '/find_stock_mvt_story_from_first_stock_mvt'
  );

  public readonly loadStockView: string = super.appendToBaseUrl('/load_stock_view');

  public readonly findPickingByCriteria: string = super.appendToBaseUrl('/find_picking_by_criteria');

  public readonly findPillingByCriteria: string = super.appendToBaseUrl('/find_pilling_by_criteria');

  public readonly findBidtStockMvtMmf: string = super.appendToBaseUrl('/find_bidt_stock_mvt_mmf');

  public readonly findBidtStockMvtForm: string = super.appendToBaseUrl('/find_stock_mvt_form_by_criteria');

  public readonly addOrUpdateMvts: string = super.appendToBaseUrl('/add_or_update_mvts');

  public readonly mmfCreateStockMvtLocationChange: string = super.appendToBaseUrl(
    '/mmf_create_stock_mvt_location_change'
  );

  public readonly mmfCalculateStockQuantityAtDate: string = super.appendToBaseUrl(
    'mmf_calculate_stock_quantity_at_date'
  );
  public readonly findTransferOrderByMvt: string = super.appendToBaseUrl('/find_transfer_order_by_mvt');

  public readonly findWorkOrderByMvts: string = super.appendToBaseUrl('/find_work_order_by_mvts');

  public readonly getOperationCategories: string = super.appendToBaseUrl('/get_operation_categories');

  public readonly findShipmentAssociatedMvt: string = super.appendToBaseUrl('/find_shipment_associated_mvt');

  public constructor() {
    super(BidtStockMvtApi.baseUrl);
  }
}
