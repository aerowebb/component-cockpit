import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class FleetBusinessApi extends AbstractApi {
  private static readonly baseUrl: string = '/fleet_business';

  public readonly findBidoMeasuresByEquipmentAndCounterCodes: string = super.appendToBaseUrl(
    '/find_bido_measures_by_equipment_and_counter_codes'
  );

  // public readonly setUserExits: string = super.appendToBaseUrl('/set_user_exits');

  // public readonly checkConfigurationEquipment: string = super.appendToBaseUrl('/check_configuration_equipment');

  // public readonly checkConfigurationEquipment: string = super.appendToBaseUrl('/check_configuration_equipment');

  // public readonly checkConfigurationItem: string = super.appendToBaseUrl('/check_configuration_item');

  // public readonly dismantleEquipments: string = super.appendToBaseUrl('/dismantle_equipments');

  // public readonly findSetBidoEquipmentStructure: string = super.appendToBaseUrl('/find_set_bido_equipment_structure');

  // public readonly findBidoEquipmentEvolutionByPnSn: string = super.appendToBaseUrl('/find_bido_equipment_evolution_by_pn_sn');

  // public readonly calculateRemainingPotential: string = super.appendToBaseUrl('/calculate_remaining_potential');

  // public readonly calculateRemainingPotential: string = super.appendToBaseUrl('/calculate_remaining_potential');

  // public readonly calculatePotentialAlertByCounter: string = super.appendToBaseUrl('/calculate_potential_alert_by_counter');

  // public readonly calculatePotentialAlertByCounter: string = super.appendToBaseUrl('/calculate_potential_alert_by_counter');

  // public readonly getEvolutionStatus: string = super.appendToBaseUrl('/get_evolution_status');

  // public readonly getEvolutionStatusCode: string = super.appendToBaseUrl('/get_evolution_status_code');

  public readonly lockEquipmentStructure: string = super.appendToBaseUrl('/lock_equipment_structure');

  public readonly unlockEquipmentStructure: string = super.appendToBaseUrl('/unlock_equipment_structure');

  public readonly updateEngineModel: string = super.appendToBaseUrl('/update_engine_model');

  // public readonly updateAttributeOnEquipment: string = super.appendToBaseUrl('/update_attribute_on_equipment');

  // public readonly propagateAttribute: string = super.appendToBaseUrl('/propagate_attribute');

  // public readonly findToolsBySearchCriteria: string = super.appendToBaseUrl('/find_tools_by_search_criteria');

  // public readonly checkFlCompatibility: string = super.appendToBaseUrl('/check_fl_compatibility');

  // public readonly dismantleEquipment: string = super.appendToBaseUrl('/dismantle_equipment');

  // public readonly dismantleEquipment: string = super.appendToBaseUrl('/dismantle_equipment');

  // public readonly findEquipmentCodeByPnSn: string = super.appendToBaseUrl('/find_equipment_code_by_pn_sn');

  // public readonly findTopEquipmentOfEquipment: string = super.appendToBaseUrl('/find_top_equipment_of_equipment');

  // public readonly findBidoFlsRecursively: string = super.appendToBaseUrl('/find_bido_fls_recursively');

  // public readonly getInventoryExportActionCode: string = super.appendToBaseUrl('/get_inventory_export_action_code');

  // public readonly executeInventoryExportAction: string = super.appendToBaseUrl('/execute_inventory_export_action');

  public readonly propagateBidoMeasure: string = super.appendToBaseUrl('/propagate_bido_measure');

  // public readonly createBidoMeasure: string = super.appendToBaseUrl('/create_bido_measure');

  // public readonly createBidoMeasure: string = super.appendToBaseUrl('/create_bido_measure');

  public readonly cancelBidoMeasure: string = super.appendToBaseUrl('/cancel_bido_measure');

  public readonly correctBidoMeasure: string = super.appendToBaseUrl('/correct_bido_measure');

  // public readonly getCounterValueByRating: string = super.appendToBaseUrl('/get_counter_value_by_rating');

  // public readonly getCounterValueByRating: string = super.appendToBaseUrl('/get_counter_value_by_rating');

  // public readonly getCounterValueInterRating: string = super.appendToBaseUrl('/get_counter_value_inter_rating');

  // public readonly getCounterValueInterRating: string = super.appendToBaseUrl('/get_counter_value_inter_rating');

  // public readonly getRatingByEquipment: string = super.appendToBaseUrl('/get_rating_by_equipment');

  // public readonly getLastMeasureNotEstimated: string = super.appendToBaseUrl('/get_last_measure_not_estimated');

  // public readonly getLastMeasureNotEstimated: string = super.appendToBaseUrl('/get_last_measure_not_estimated');

  // public readonly getModelByEquipment: string = super.appendToBaseUrl('/get_model_by_equipment');

  // public readonly isEquipmentInShopVisit: string = super.appendToBaseUrl('/is_equipment_in_shop_visit');

  // public readonly isLastConfigurationChange: string = super.appendToBaseUrl('/is_last_configuration_change');

  // public readonly importMeasuringPoints: string = super.appendToBaseUrl('/import_measuring_points');

  // public readonly getLifeLimitsByPnSn: string = super.appendToBaseUrl('/get_life_limits_by_pn_sn');

  // public readonly getLifeLimitsByEquipment: string = super.appendToBaseUrl('/get_life_limits_by_equipment');

  // public readonly getLastMeasureByEquipment: string = super.appendToBaseUrl('/get_last_measure_by_equipment');

  // public readonly getMeasuresToCancelSince: string = super.appendToBaseUrl('/get_measures_to_cancel_since');

  // public readonly getMeasuresToCreateSince: string = super.appendToBaseUrl('/get_measures_to_create_since');

  // public readonly getInOperationMillisCountBetween: string = super.appendToBaseUrl('/get_in_operation_millis_count_between');

  // public readonly refreshAssetStructureByFLocType: string = super.appendToBaseUrl('/refresh_asset_structure_by_f_loc_type');

  public readonly generateFmdByEventCode: string = super.appendToBaseUrl('/generate_fmd_by_event_code');

  public readonly generateFdeByEventCode: string = super.appendToBaseUrl('/generate_fde_by_event_code');

  public readonly findBireSbsByEquipment: string = super.appendToBaseUrl('/find_bire_sbs_by_equipment');

  public readonly findBireEvolutionsByEquipment: string = super.appendToBaseUrl('/find_bire_evolutions_by_equipment');

  // public readonly hasOperationalStatusAlert: string = super.appendToBaseUrl('/has_operational_status_alert');

  // public readonly compareHistoricAndInstalledBase: string = super.appendToBaseUrl('/compare_historic_and_installed_base');

  // public readonly applyEvolutionToFleetEngines: string = super.appendToBaseUrl('/apply_evolution_to_fleet_engines');

  public readonly wdPropagateMeasures: string = super.appendToBaseUrl('/wd_propagate_measures');

  // public readonly generateXlsLlpSheet: string = super.appendToBaseUrl('/generate_xls_llp_sheet');

  // public readonly generateXlsADSBStatus: string = super.appendToBaseUrl('/generate_xls_adsb_status');

  // public readonly resetLimitsOnEngineStructure: string = super.appendToBaseUrl('/reset_limits_on_engine_structure');

  // public readonly getAssetStructure: string = super.appendToBaseUrl('/get_asset_structure');

  // public readonly getAssetStructure: string = super.appendToBaseUrl('/get_asset_structure');

  // public readonly findDeferredDefectEvents: string = super.appendToBaseUrl('/find_deferred_defect_events');

  // public readonly generateAircraftLogbook: string = super.appendToBaseUrl('/generate_aircraft_logbook');

  // public readonly generateEngineLogbook: string = super.appendToBaseUrl('/generate_engine_logbook');

  public readonly generateFlightLogbookPDF: string = super.appendToBaseUrl('/generate_flight_logbook_pdf');

  // public readonly synchronizeCounterReferences: string = super.appendToBaseUrl('/synchronize_counter_references');

  public readonly generateEstimatedMeasures: string = super.appendToBaseUrl('/generate_estimated_measures');

  public readonly propagateEISDateOfEquipment: string = super.appendToBaseUrl('/propagate_eis_date_of_equipment');

  public readonly getEventXlsReport: string = super.appendToBaseUrl('/get_event_xls_report');

  // public readonly generateEquipmentCard: string = super.appendToBaseUrl('/generate_equipment_card');

  public readonly generateDefectCard: string = super.appendToBaseUrl('/generate_defect_card');

  // public readonly calculateMELAlertFromRootCause: string = super.appendToBaseUrl('/calculate_mel_alert_from_root_cause');

  // public readonly calculateADSBStatus: string = super.appendToBaseUrl('/calculate_adsb_status');

  // public readonly controlEvolutionsInterdependence: string = super.appendToBaseUrl('/control_evolutions_interdependence');

  // public readonly findAllEquipmentsInStructureByMandantAndEquipmentCodeWithAttributes: string = super.appendToBaseUrl('/find_all_equipments_in_structure_by_mandant_and_equipment_code_with_attributes');

  // public readonly findAllEquipmentsInStructureByMandantAndEquipmentCodeByMeasureCode: string = super.appendToBaseUrl('/find_all_equipments_in_structure_by_mandant_and_equipment_code_by_measure_code');

  public readonly updateCustomerOnEquipmentStructure: string = super.appendToBaseUrl(
    '/update_customer_on_equipment_structure'
  );

  // public readonly updateAttributeOnEquipmentStructure: string = super.appendToBaseUrl('/update_attribute_on_equipment_structure');

  // public readonly findAllEquipmentsInStructureByEquipmentCode: string = super.appendToBaseUrl('/find_all_equipments_in_structure_by_equipment_code');

  // public readonly findBidoFlStructureAssociatedToEquipment: string = super.appendToBaseUrl('/find_bido_fl_structure_associated_to_equipment');

  // public readonly findBidoFlsByEquipmentCodeAndFlFunction: string = super.appendToBaseUrl('/find_bido_fls_by_equipment_code_and_fl_function');

  // public readonly findBidoMeasuresByEquipmentAndSource: string = super.appendToBaseUrl('/find_bido_measures_by_equipment_and_source');

  // public readonly getParentEquipmentByEquipmentFunctionRecursively: string = super.appendToBaseUrl('/get_parent_equipment_by_equipment_function_recursively');

  // public readonly getParentsByEquipmentRecursivelyAtDate: string = super.appendToBaseUrl('/get_parents_by_equipment_recursively_at_date');

  // public readonly calculateEvolutionComplianceStatus: string = super.appendToBaseUrl('/calculate_evolution_compliance_status');

  // public readonly checkIfAssetIsConcernedBySBADEVOMOD: string = super.appendToBaseUrl('/check_if_asset_is_concerned_by_sbadevomod');

  // public readonly isElectronicSignatureActivatedOnDefects: string = super.appendToBaseUrl('/is_electronic_signature_activated_on_defects');

  // public readonly findWorkPostponementRequestsByEquipment: string = super.appendToBaseUrl('/find_work_postponement_requests_by_equipment');

  // public readonly findWorkPostponementRequestsByWorkOrder: string = super.appendToBaseUrl('/find_work_postponement_requests_by_work_order');

  // public readonly getWorkPostponementRequestByEquipmentCodeAndADSB: string = super.appendToBaseUrl('/get_work_postponement_request_by_equipment_code_and_adsb');

  // public readonly getWorkPostponementRequestByEquipmentCodeAndTask: string = super.appendToBaseUrl('/get_work_postponement_request_by_equipment_code_and_task');

  // public readonly findFirstAscendantEquipmentWithMaintenancePlan: string = super.appendToBaseUrl('/find_first_ascendant_equipment_with_maintenance_plan');

  // public readonly getUsageStorageCounterValueInDays: string = super.appendToBaseUrl('/get_usage_storage_counter_value_in_days');

  // public readonly installEquipment: string = super.appendToBaseUrl('/install_equipment');

  // public readonly installEquipment: string = super.appendToBaseUrl('/install_equipment');

  // public readonly checkInstall: string = super.appendToBaseUrl('/check_install');

  // public readonly swapEquipments: string = super.appendToBaseUrl('/swap_equipments');

  // public readonly applyEvolution: string = super.appendToBaseUrl('/apply_evolution');

  // public readonly removeEvolution: string = super.appendToBaseUrl('/remove_evolution');

  // public readonly checkBidoMeasure: string = super.appendToBaseUrl('/check_bido_measure');

  // public readonly copyFleetData: string = super.appendToBaseUrl('/copy_fleet_data');

  // public readonly isEquipmentPMA: string = super.appendToBaseUrl('/is_equipment_pma');

  // public readonly isLoadedEvent: string = super.appendToBaseUrl('/is_loaded_event');

  // public readonly saveFmd: string = super.appendToBaseUrl('/save_fmd');

  // public readonly wdImportMeasures: string = super.appendToBaseUrl('/wd_import_measures');

  // public readonly exportGantt: string = super.appendToBaseUrl('/export_gantt');

  public readonly exportAssetData: string = super.appendToBaseUrl('/export_asset_data');

  // public readonly getCalendarLimit: string = super.appendToBaseUrl('/get_calendar_limit');

  // public readonly getCalendarLimit: string = super.appendToBaseUrl('/get_calendar_limit');

  // public readonly getDefectData: string = super.appendToBaseUrl('/get_defect_data');

  // public readonly isEquipmentInMEL: string = super.appendToBaseUrl('/is_equipment_in_mel');

  // public readonly isPartInMEL: string = super.appendToBaseUrl('/is_part_in_mel');

  // public readonly isItemInMEL: string = super.appendToBaseUrl('/is_item_in_mel');

  public readonly saveFlightLog: string = super.appendToBaseUrl('/save_flight_log');

  // public readonly attachEquipmentToFunctionalLocation: string = super.appendToBaseUrl('/attach_equipment_to_functional_location');

  // public readonly propagateFLDetachmentToEquipments: string = super.appendToBaseUrl('/propagate_fl_detachment_to_equipments');

  // public readonly findOperatorsBidoCustomersImpactedByEvolution: string = super.appendToBaseUrl('/find_operators_bido_customers_impacted_by_evolution');

  // public readonly findBidoEquipmentsImpactedByEvolution: string = super.appendToBaseUrl('/find_bido_equipments_impacted_by_evolution');

  // public readonly calculateRemainingPotentialByRating: string = super.appendToBaseUrl('/calculate_remaining_potential_by_rating');

  public readonly calculatePotentialAlertsByCounterAndRating: string = super.appendToBaseUrl(
    '/calculate_potential_alerts_by_counter_and_rating'
  );

  // public readonly findComplexEquipmentStructureByEquipment: string = super.appendToBaseUrl('/find_complex_equipment_structure_by_equipment');

  // public readonly findComplexEquipmentStructureByPnAndSnCodes: string = super.appendToBaseUrl('/find_complex_equipment_structure_by_pn_and_sn_codes');

  // public readonly findBidoMeasureByEquipmentAndCounterCodesAndReadingDate: string = super.appendToBaseUrl('/find_bido_measure_by_equipment_and_counter_codes_and_reading_date');

  // public readonly findBidoMeasuresByEquipmentCodeListExcludingCancelled: string = super.appendToBaseUrl('/find_bido_measures_by_equipment_code_list_excluding_cancelled');

  public readonly findBireMeasureReferencesOfStructureByEquipmentCode: string = super.appendToBaseUrl(
    '/find_bire_measure_references_of_structure_by_equipment_code'
  );

  // public readonly calculateTheoreticalConfigurationSbComplianceStatus: string = super.appendToBaseUrl('/calculate_theoretical_configuration_sb_compliance_status');

  // public readonly getHighestOccurrenceNumberByEquipmentAndMissionCodes: string = super.appendToBaseUrl('/get_highest_occurrence_number_by_equipment_and_mission_codes');

  // public readonly findAllEquipmentEvolutionInStructureByMandantAndEquipmentCode: string = super.appendToBaseUrl('/find_all_equipment_evolution_in_structure_by_mandant_and_equipment_code');

  // public readonly getWorkPostponementRequestByEquipmentCodeAndRootCauseAssetCode: string = super.appendToBaseUrl('/get_work_postponement_request_by_equipment_code_and_root_cause_asset_code');

  // public readonly synchronizeAllEquipmentFunctionCodesWithReferential: string = super.appendToBaseUrl('/synchronize_all_equipment_function_codes_with_referential');

  // public readonly synchronizeAllEquipmentItemNumbersWithReferential: string = super.appendToBaseUrl('/synchronize_all_equipment_item_numbers_with_referential');

  // public readonly getLifeLimitedPartStatus: string = super.appendToBaseUrl('/get_life_limited_part_status');

  // public readonly getAppliedEvolutionsForEquipment: string = super.appendToBaseUrl('/get_applied_evolutions_for_equipment');

  // public readonly generateDispatchLogEvent: string = super.appendToBaseUrl('/generate_dispatch_log_event');

  public readonly createWorkPostponementRequest: string = super.appendToBaseUrl('/create_work_postponement_request');

  public readonly cancelWorkPostponementRequest: string = super.appendToBaseUrl('/cancel_work_postponement_request');

  public readonly acceptWorkPostponementRequest: string = super.appendToBaseUrl('/accept_work_postponement_request');

  public readonly refuseWorkPostponementRequest: string = super.appendToBaseUrl('/refuse_work_postponement_request');

  public readonly findDefectEventsByEquipmentCode: string = super.appendToBaseUrl(
    '/find_defect_events_by_equipment_code'
  );

  // public readonly repropagateBidoMeasures: string = super.appendToBaseUrl('/repropagate_bido_measures');

  // public readonly getXlsE5XMappingReport: string = super.appendToBaseUrl('/get_xls_e_5_x_mapping_report');

  public readonly getXlsUnitConversionMatrixReport: string = super.appendToBaseUrl(
    '/get_xls_unit_conversion_matrix_report'
  );

  public readonly getXlsUnitConversionMatrixWithVariantReport: string = super.appendToBaseUrl(
    '/get_xls_unit_conversion_matrix_with_variant_report'
  );

  // public readonly getUsageCounterValueInDays: string = super.appendToBaseUrl('/get_usage_counter_value_in_days');

  // public readonly getStorageCounterValueInDays: string = super.appendToBaseUrl('/get_storage_counter_value_in_days');

  // public readonly getCounterValueInterRatingByNotificationAndCounterAndEquipmentCodes: string = super.appendToBaseUrl('/get_counter_value_inter_rating_by_notification_and_counter_and_equipment_codes');

  public readonly findAllFlInStructureByEquipmentCodeForDefect: string = super.appendToBaseUrl(
    '/find_all_fl_in_structure_by_equipment_code_for_defect'
  );

  public readonly validateActionsOnModificationsOfFlight: string = super.appendToBaseUrl(
    '/validate_actions_on_modifications_of_flight'
  );

  public readonly validateActionsOnOmeAndRoleEquipmentsOfFlight: string = super.appendToBaseUrl(
    '/validate_actions_on_ome_and_role_equipments_of_flight'
  );

  public readonly validateActionsOnTasksOfFlight: string = super.appendToBaseUrl(
    '/validate_actions_on_tasks_of_flight'
  );

  public readonly getImportE5xMappingReport: string = super.appendToBaseUrl('/get_xls_e5_x_mapping_report');

  public readonly dismantleEquipment: string = super.appendToBaseUrl('/dismantle_equipment');

  public readonly installEquipment: string = super.appendToBaseUrl('/install_equipment');

  public readonly getEvolutionsLinkedToAsset: string = super.appendToBaseUrl('/get_evolutions_linked_to_asset');

  public readonly copyFleetData: string = super.appendToBaseUrl('/fleet_data_copy');

  public readonly findAssetInstallList: string = super.appendToBaseUrl('/find_assets_install_list');

  public readonly getAssetsToBeTransferDetail: string = super.appendToBaseUrl('/getassetstobetransferdetail');

  public readonly getCounterMeasureList: string = super.appendToBaseUrl('/get_counter_measure_list');

  public readonly getItemDataList: string = super.appendToBaseUrl('/get_item_data_list');

  public readonly getFunctionalLocationDataMap: string = super.appendToBaseUrl('/get_functional_location_data_map');

  public readonly getParentsByEquipmentRecursivelyAtDate: string = super.appendToBaseUrl(
    '/get_parents_by_equipment_recursively_at_date'
  );

  public readonly dataFleetTransfer: string = super.appendToBaseUrl(
    '/transferfleetdataandupdatecustomeronequipmentstructure'
  );

  public readonly initializeLineMaintenance: string = super.appendToBaseUrl('/initialize_line_maintenance');

  public readonly loadLineMaintenance: string = super.appendToBaseUrl('/load_line_maintenance');

  public readonly loadLineMaintenanceModificationList: string = super.appendToBaseUrl(
    '/load_line_maintenance_modification_list'
  );

  public readonly loadLineMaintenanceOperationList: string = super.appendToBaseUrl(
    '/load_line_maintenance_operation_list'
  );

  public readonly loadLineMaintenanceRoleEquipmentOmeList: string = super.appendToBaseUrl(
    '/load_line_maintenance_role_equipment_ome_list'
  );

  public readonly loadLineMaintenanceWorkPackageList: string = super.appendToBaseUrl(
    '/load_line_maintenance_work_package_list'
  );

  public readonly checkGoNoGoWPsOfFlight: string = super.appendToBaseUrl('/check_go_no_go_wps_of_flight');

  public readonly clearLineMaintenanceCache: string = super.appendToBaseUrl('/clear_line_maintenance_cache');

  public readonly calculateReplenishmentQuantityList: string = super.appendToBaseUrl(
    '/calculate_replenishment_quantity_list'
  );

  public readonly createReplenishmentByFlightAndEquipmentAndReplenishmentType: string = super.appendToBaseUrl(
    '/create_replenishment_by_flight_and_equipment_and_replenishment_type'
  );

  public readonly resetReplenishmentEngineOilConsumption: string = super.appendToBaseUrl(
    '/reset_replenishment_engine_oil_consumption'
  );

  public readonly calculateReplenishmentEngineOilConsumption: string = super.appendToBaseUrl(
    '/calculate_replenishment_engine_oil_cConsumption'
  );

  public readonly getOrphanList: string = super.appendToBaseUrl('/get_orphan_list');

  public readonly getFlStructure: string = super.appendToBaseUrl('/get_fl_structure');

  public readonly cancelFlightReplenishmentValidation: string = super.appendToBaseUrl(
    '/cancel_flight_replenishment_validation'
  );

  public readonly validateFlightReplenishment: string = super.appendToBaseUrl('/validate_flight_replenishment');

  public readonly controlConfiguration: string = super.appendToBaseUrl('/control_configuration');

  public readonly assetAtDate: string = super.appendToBaseUrl('/asset_at_date');

  public readonly assetAtDateForAppliedEvolutionTab: string = super.appendToBaseUrl(
    '/asset_at_date_for_applied_evolution_tab'
  );

  public readonly assetAtDateForMeasuresTab: string = super.appendToBaseUrl('/asset_at_date_for_measure_tab');

  public readonly findAllEquipmentsInStructureByEquipmentCode: string = super.appendToBaseUrl(
    '/find_all_equipments_in_structure_by_equipment_code'
  );

  public readonly saveFlight: string = super.appendToBaseUrl('/save_flight');

  public readonly goNoGoValidation: string = super.appendToBaseUrl('/go_no_go_validation');

  public readonly validateGoNoGo: string = super.appendToBaseUrl('/validate_go_no_go');

  public readonly checkInstall: string = super.appendToBaseUrl('/check_install');

  public readonly dismantleOneEquipment: string = super.appendToBaseUrl('/dismantle_one_equipment');

  public readonly installOneEquipment: string = super.appendToBaseUrl('/install_one_equipment');

  public readonly getItemListToInstallEquipment: string = super.appendToBaseUrl('/get_item_list_to_install_equipment');

  public readonly getFunctionLocationListToInstallEquipment: string = super.appendToBaseUrl(
    '/get_function_location_list_to_install_equipment'
  );

  public readonly getEquipmentsAssociatedToFlCode: string = super.appendToBaseUrl('/get_equipment_linked_to_fl_code');

  public readonly getItemRelatedToFLCode: string = super.appendToBaseUrl('/get_item_linked_to_fl_code');

  public readonly getFunctionalLocationLinkedToItem: string = super.appendToBaseUrl(
    '/get_functional_location_linked_to_item'
  );

  public readonly findNotificationDateOrderCriteria: string = super.appendToBaseUrl(
    '/find_notification_date_order_criteria'
  );

  public readonly getFmdReport: string = super.appendToBaseUrl('/get_fmd_report');

  public readonly generateE5XFileFromFmd: string = super.appendToBaseUrl('/generate_e5_x_file_from_fmd');

  public readonly calculatePostFlightRecordsInformations: string = super.appendToBaseUrl(
    '/calculate_post_flight_records_informations'
  );

  public readonly createDefect: string = super.appendToBaseUrl('/create_defect');

  public readonly getFlDropDownChange: string = super.appendToBaseUrl('/get_fl_drop_down_change');

  public readonly isLastConfigurationChange: string = super.appendToBaseUrl('/is_last_configuration_change');

  public readonly isFunctionalItemStructure: string = super.appendToBaseUrl('/is_functional_item_structure');

  public readonly adminMonitoring: string = super.appendToBaseUrl('/admin_monitoring');

  public readonly resetStats: string = super.appendToBaseUrl('/reset_stats');

  public readonly refreshStats: string = super.appendToBaseUrl('/refresh_stats');

  public readonly detailedStats: string = super.appendToBaseUrl('/detailed_stats');

  public readonly changeLogLevel: string = super.appendToBaseUrl('/change_log_level');

  public readonly isFLFree: string = super.appendToBaseUrl('/is_fl_free');

  public readonly checkIfAssetIsConcernedBySbAdEvoMod: string = super.appendToBaseUrl(
    '/check_if_asset_is_concerned_by_sbadevomod'
  );

  public constructor() {
    super(FleetBusinessApi.baseUrl);
  }
}
