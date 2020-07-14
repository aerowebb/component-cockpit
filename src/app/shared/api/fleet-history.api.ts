import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class FleetHistoryApi extends AbstractApi {
  private static readonly baseUrl: string = '/fleet_history';

  public readonly findHBidoEquipmentAttributesByAttributeId: string = super.appendToBaseUrl(
    '/find_h_bido_equipment_attributes_by_atribute_id'
  );

  public readonly findHBidoNotificationAttributesByAttributeId: string = super.appendToBaseUrl(
    '/find_h_bido_notification_attributes_by_atribute_id'
  );

  public readonly findAssetsRemovedList: string = super.appendToBaseUrl('/find_assets_removed_list');

  public readonly findHFBidoEquipmentsByEquipmentCode: string = super.appendToBaseUrl(
    '/find_hf_bido_equipments_by_equipment_code'
  );

  public readonly findBidoFhEquipments: string = super.appendToBaseUrl('/find_bido_fh_equipments');

  public readonly findHBidoEquipments: string = super.appendToBaseUrl('/find_h_bido_equipments');

  public readonly findHBidoNotifications: string = super.appendToBaseUrl('/find_h_bido_notifications');

  public readonly initilizeBidoEquipmentReportTable: string = super.appendToBaseUrl(
    '/find_bido_report_by_equipment_code'
  );

  public readonly findHFBidoRatingByEquipmentCodeFromDate: string = super.appendToBaseUrl(
    '/find_hf_bido_rating_by_equipment_code_from_date'
  );

  public readonly findGoNoGoValidationStatus: string = super.appendToBaseUrl('/find_go_no_go_validation_status');

  public readonly findHBidoNotificationAttributes: string = super.appendToBaseUrl(
    '/find_h_bido_notification_attributes'
  );

  public readonly findBidoEquipmentByEquipmentCodeFromDate: string = super.appendToBaseUrl(
    '/find_bido_equipment_by_equipment_code_from_date'
  );

  public readonly findHBidoMissionEquipments: string = super.appendToBaseUrl('/find_h_bido_mission_equipments');

  public constructor() {
    super(FleetHistoryApi.baseUrl);
  }
}
