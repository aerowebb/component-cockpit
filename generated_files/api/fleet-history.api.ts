import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class FleetHistoryApi extends AbstractApi {
  private static readonly baseUrl: string = '/fleet_history';

  // public readonly findLastBidoNotificationByEquipmentCodeAndTypeCodeAndFieldNameFromDate: string = super.appendToBaseUrl('/find_last_bido_notification_by_equipment_code_and_type_code_and_field_name_from_date');

  // public readonly findHBidoEquipmentEvolutionsByHBidoEquipment: string = super.appendToBaseUrl('/find_h_bido_equipment_evolutions_by_h_bido_equipment');

  // public readonly findHBidoEquipmentCountersByHBidoEquipment: string = super.appendToBaseUrl('/find_h_bido_equipment_counters_by_h_bido_equipment');

  // public readonly findOperatorByEquipmentCodeFromDate: string = super.appendToBaseUrl('/find_operator_by_equipment_code_from_date');

  // public readonly findHFBidoEquipmentByEquipmentCodeFromDate: string = super.appendToBaseUrl('/find_hf_bido_equipment_by_equipment_code_from_date');

  // public readonly findHFBidoEquipmentSonsByEquipmentCodeFromDate: string = super.appendToBaseUrl('/find_hf_bido_equipment_sons_by_equipment_code_from_date');

  // public readonly findAllHFBidoEquipmentsInStructure: string = super.appendToBaseUrl('/find_all_hf_bido_equipments_in_structure');

  // public readonly findHFBidoEquipmentsByEquipmentCode: string = super.appendToBaseUrl('/find_hf_bido_equipments_by_equipment_code');

  // public readonly findHFBidoEquipmentsBySearchCriteria: string = super.appendToBaseUrl('/find_hf_bido_equipments_by_search_criteria');

  // public readonly findHFBidoRatingByEquipmentCodeFromDate: string = super.appendToBaseUrl('/find_hf_bido_rating_by_equipment_code_from_date');

  // public readonly getParentByEquipmentFunctionAtDateRecursively: string = super.appendToBaseUrl('/get_parent_by_equipment_function_at_date_recursively');

  // public readonly getParentByEquipmentFunctionAtDateRecursively: string = super.appendToBaseUrl('/get_parent_by_equipment_function_at_date_recursively');

  // public readonly findBidoEquipmentCodeSonsByFatherEquipmentCodeAndDate: string = super.appendToBaseUrl('/find_bido_equipment_code_sons_by_father_equipment_code_and_date');

  // public readonly findBidoEquipmentStructureByFatherEquipmentCodeAndDate: string = super.appendToBaseUrl('/find_bido_equipment_structure_by_father_equipment_code_and_date');

  // public readonly findBidoEquipmentEvolutionsByEquipmentCodeFromDate: string = super.appendToBaseUrl('/find_bido_equipment_evolutions_by_equipment_code_from_date');

  // public readonly findLastBidoNotificationByEquipmentCodeAndTypeCodesFromDate: string = super.appendToBaseUrl('/find_last_bido_notification_by_equipment_code_and_type_codes_from_date');

  // public readonly findLastBidoFhEquipmentByEquipmentCodeAndFieldNameFromDate: string = super.appendToBaseUrl('/find_last_bido_fh_equipment_by_equipment_code_and_field_name_from_date');

  // public readonly findHBidoContacts: string = super.appendToBaseUrl('/find_h_bido_contacts');

  // public readonly findHBidoCustomers: string = super.appendToBaseUrl('/find_h_bido_customers');

  // public readonly findHBidoEquipments: string = super.appendToBaseUrl('/find_h_bido_equipments');

  public readonly findHBidoMissionEquipments: string = super.appendToBaseUrl('/find_h_bido_mission_equipments');

  // public readonly findHBidoEquipmentAttributes: string = super.appendToBaseUrl('/find_h_bido_equipment_attributes');

  // public readonly findHBidoNotificationAttributes: string = super.appendToBaseUrl('/find_h_bido_notification_attributes');

  // public readonly findHBidoEquipmentCounters: string = super.appendToBaseUrl('/find_h_bido_equipment_counters');

  // public readonly findHBidoEquipmentEvolutions: string = super.appendToBaseUrl('/find_h_bido_equipment_evolutions');

  // public readonly findHBidoEquipmentUsages: string = super.appendToBaseUrl('/find_h_bido_equipment_usages');

  // public readonly findBidoFlEquipments: string = super.appendToBaseUrl('/find_bido_fl_equipments');

  // public readonly findHBidoNotifications: string = super.appendToBaseUrl('/find_h_bido_notifications');

  // public readonly findHBidoEquipment: string = super.appendToBaseUrl('/find_h_bido_equipment');

  // public readonly findBidoFhEquipments: string = super.appendToBaseUrl('/find_bido_fh_equipments');

  // public readonly findOwnerByEquipmentCodeFromDate: string = super.appendToBaseUrl('/find_owner_by_equipment_code_from_date');

  // public readonly getHFBidoEquipmentRepresentation: string = super.appendToBaseUrl('/get_hf_bido_equipment_representation');

  public constructor() {
    super(FleetHistoryApi.baseUrl);
  }
}
