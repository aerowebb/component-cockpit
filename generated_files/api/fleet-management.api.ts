import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class FleetManagementApi extends AbstractApi {

	private static readonly baseUrl: string = '/fleet_management';

	// public readonly findBidoRatingsByEquipmentCodeAndCounterCode: string = super.appendToBaseUrl('/find_bido_ratings_by_equipment_code_and_counter_code');

	// public readonly findBidoAttributesByAttributeCategory: string = super.appendToBaseUrl('/find_bido_attributes_by_attribute_category');

	// public readonly findBidoAttributeValuesByAttributeId: string = super.appendToBaseUrl('/find_bido_attribute_values_by_attribute_id');

	// public readonly findBidoCusCustomersByCustomerCode: string = super.appendToBaseUrl('/find_bido_cus_customers_by_customer_code');

	// public readonly removeAllBidoCusCustomersByCustomerCode: string = super.appendToBaseUrl('/remove_all_bido_cus_customers_by_customer_code');

	// public readonly findBidoContactsByCustomerCodeAndContactName: string = super.appendToBaseUrl('/find_bido_contacts_by_customer_code_and_contact_name');

	// public readonly findBidoNotificationsByEquipmentCode: string = super.appendToBaseUrl('/find_bido_notifications_by_equipment_code');

	// public readonly findBidoNotificationsByImpactedAssetCode: string = super.appendToBaseUrl('/find_bido_notifications_by_impacted_asset_code');

	// public readonly findBidoNotificationsBySearchCriteria: string = super.appendToBaseUrl('/find_bido_notifications_by_search_criteria');

	// public readonly findBidoNotificationsBySearchCriteria: string = super.appendToBaseUrl('/find_bido_notifications_by_search_criteria');

	// public readonly findBidoNotificationEvolutionsByNotificationCode: string = super.appendToBaseUrl('/find_bido_notification_evolutions_by_notification_code');

	// public readonly findBidoNotificationTypesByTypeCategory: string = super.appendToBaseUrl('/find_bido_notification_types_by_type_category');

	// public readonly findBidoEquipmentUsagesByEquipmentCode: string = super.appendToBaseUrl('/find_bido_equipment_usages_by_equipment_code');

	// public readonly findBidoEquipmentUsagesByEquipmentAndUnitCodes: string = super.appendToBaseUrl('/find_bido_equipment_usages_by_equipment_and_unit_codes');

	// public readonly findBidoReturnReasonsByNotificationCode: string = super.appendToBaseUrl('/find_bido_return_reasons_by_notification_code');

	// public readonly findBidoCounterReferencesByEquipmentCode: string = super.appendToBaseUrl('/find_bido_counter_references_by_equipment_code');

	// public readonly findBidoEquipmentCountersByEquipmentCodeList: string = super.appendToBaseUrl('/find_bido_equipment_counters_by_equipment_code_list');

	// public readonly findBidoEquipmentsEngineByEquipmentCode: string = super.appendToBaseUrl('/find_bido_equipments_engine_by_equipment_code');

	// public readonly findBidoEventExtensionsByNotificationCodeList: string = super.appendToBaseUrl('/find_bido_event_extensions_by_notification_code_list');

	// public readonly findBidoEquipmentsByPnAndSnCodesAndItemNumber: string = super.appendToBaseUrl('/find_bido_equipments_by_pn_and_sn_codes_and_item_number');

	// public readonly findMeasuresSignatureByEquipmentCodes: string = super.appendToBaseUrl('/find_measures_signature_by_equipment_codes');

	// public readonly findBidoMeasuresByEquipmentAndCounterCodes: string = super.appendToBaseUrl('/find_bido_measures_by_equipment_and_counter_codes');

	// public readonly findBidoFlEquipmentByEquipmentCodeFromDate: string = super.appendToBaseUrl('/find_bido_fl_equipment_by_equipment_code_from_date');

	// public readonly findBidoFlEquipmentsByEquipmentCode: string = super.appendToBaseUrl('/find_bido_fl_equipments_by_equipment_code');

	// public readonly findBidoEquipmentsByEquEquipmentCode: string = super.appendToBaseUrl('/find_bido_equipments_by_equ_equipment_code');

	// public readonly findBidoEquipmentsBySearchCriteria: string = super.appendToBaseUrl('/find_bido_equipments_by_search_criteria');

	// public readonly findBidoCustomersBySearchCriteria: string = super.appendToBaseUrl('/find_bido_customers_by_search_criteria');

	// public readonly findBidoNotificationTypesBySearchCriteria: string = super.appendToBaseUrl('/find_bido_notification_types_by_search_criteria');

	// public readonly findBidoSubscriptionsBySearchCriteria: string = super.appendToBaseUrl('/find_bido_subscriptions_by_search_criteria');

	// public readonly findBidoExtensionsBySearchCriteria: string = super.appendToBaseUrl('/find_bido_extensions_by_search_criteria');

	// public readonly findBidoContactsBySubscriptionCriteria: string = super.appendToBaseUrl('/find_bido_contacts_by_subscription_criteria');

	// public readonly findBidoFamilyVariantsByOwnerAndOperatorCodes: string = super.appendToBaseUrl('/find_bido_family_variants_by_owner_and_operator_codes');

	// public readonly findAllOperatorsLinkedToEquipments: string = super.appendToBaseUrl('/find_all_operators_linked_to_equipments');

	// public readonly findOwnersBidoCustomersByOperatorCode: string = super.appendToBaseUrl('/find_owners_bido_customers_by_operator_code');

	// public readonly findBidoEquipmentFunctionsByOwnerAndOperatorAndFamilyCodesAsStrings: string = super.appendToBaseUrl('/find_bido_equipment_functions_by_owner_and_operator_and_family_codes_as_strings');

	// public readonly findBidoNotificationsByStatusListAndTypeCodelistAndEquipmentCodeList: string = super.appendToBaseUrl('/find_bido_notifications_by_status_list_and_type_codelist_and_equipment_code_list');

	// public readonly findBidoCustomersNotOperatorAndOwnerWithoutMandant: string = super.appendToBaseUrl('/find_bido_customers_not_operator_and_owner_without_mandant');

	// public readonly findBidoNotificationEvolutionsByNotificationCodeList: string = super.appendToBaseUrl('/find_bido_notification_evolutions_by_notification_code_list');

	// public readonly findLastShopVisitBidoNotificationsByEquipmentCode: string = super.appendToBaseUrl('/find_last_shop_visit_bido_notifications_by_equipment_code');

	// public readonly findBidoEquipmentCountersByCounterAndPnAndSnCodes: string = super.appendToBaseUrl('/find_bido_equipment_counters_by_counter_and_pn_and_sn_codes');

	// public readonly createBidoFlEquipment: string = super.appendToBaseUrl('/create_bido_fl_equipment');

	// public readonly createBidoFlVariant: string = super.appendToBaseUrl('/create_bido_fl_variant');

	// public readonly createBidoFlModel: string = super.appendToBaseUrl('/create_bido_fl_model');

	// public readonly updateBidoFlEquipment: string = super.appendToBaseUrl('/update_bido_fl_equipment');

	// public readonly removeBidoFlEquipment: string = super.appendToBaseUrl('/remove_bido_fl_equipment');

	// public readonly removeBidoFlVariant: string = super.appendToBaseUrl('/remove_bido_fl_variant');

	// public readonly removeBidoFlModel: string = super.appendToBaseUrl('/remove_bido_fl_model');

	// public readonly findBidoFlEquipmentsByFlCode: string = super.appendToBaseUrl('/find_bido_fl_equipments_by_fl_code');

	// public readonly findBidoFlVariantsByFlCode: string = super.appendToBaseUrl('/find_bido_fl_variants_by_fl_code');

	// public readonly findBidoFlModelsByFlCode: string = super.appendToBaseUrl('/find_bido_fl_models_by_fl_code');

	// public readonly saveBidoNotificationEvolution: string = super.appendToBaseUrl('/save_bido_notification_evolution');

	// public readonly findBidoSubscription: string = super.appendToBaseUrl('/find_bido_subscription');

	// public readonly findBidoExtension: string = super.appendToBaseUrl('/find_bido_extension');

	// public readonly findBidoEquipmentEvolution: string = super.appendToBaseUrl('/find_bido_equipment_evolution');

	// public readonly findBidoFleetsBySearchCriteria: string = super.appendToBaseUrl('/find_bido_fleets_by_search_criteria');

	// public readonly findBidoFlsBySearchCriteria: string = super.appendToBaseUrl('/find_bido_fls_by_search_criteria');

	// public readonly findBidoContactsBySearchCriteria: string = super.appendToBaseUrl('/find_bido_contacts_by_search_criteria');

	// public readonly findAllOwnersLinkedToEquipments: string = super.appendToBaseUrl('/find_all_owners_linked_to_equipments');

	// public readonly findBidoRootCause: string = super.appendToBaseUrl('/find_bido_root_cause');

	// public readonly findBidoNotification: string = super.appendToBaseUrl('/find_bido_notification');

	// public readonly findBidoNotificationType: string = super.appendToBaseUrl('/find_bido_notification_type');

	// public readonly findBidoMissionsBySearchCriteria: string = super.appendToBaseUrl('/find_bido_missions_by_search_criteria');

	// public readonly findBidoNotificationContact: string = super.appendToBaseUrl('/find_bido_notification_contact');

	// public readonly importFleetDataFromConnector: string = super.appendToBaseUrl('/import_fleet_data_from_connector');

	// public readonly findBidoUnitMeasure: string = super.appendToBaseUrl('/find_bido_unit_measure');

	// public readonly createBidoEquipment: string = super.appendToBaseUrl('/create_bido_equipment');

	// public readonly createBidoNotificationType: string = super.appendToBaseUrl('/create_bido_notification_type');

	// public readonly updateBidoEquipment: string = super.appendToBaseUrl('/update_bido_equipment');

	// public readonly updateBidoNotificationType: string = super.appendToBaseUrl('/update_bido_notification_type');

	// public readonly removeBidoEquipment: string = super.appendToBaseUrl('/remove_bido_equipment');

	// public readonly removeBidoNotificationType: string = super.appendToBaseUrl('/remove_bido_notification_type');

	// public readonly removeBidoSubscription: string = super.appendToBaseUrl('/remove_bido_subscription');

	// public readonly removeBidoExtension: string = super.appendToBaseUrl('/remove_bido_extension');

	// public readonly createBidoFamilyVariant: string = super.appendToBaseUrl('/create_bido_family_variant');

	// public readonly updateBidoFamilyVariant: string = super.appendToBaseUrl('/update_bido_family_variant');

	// public readonly findBidoMissionEquipment: string = super.appendToBaseUrl('/find_bido_mission_equipment');

	// public readonly findAllBidoContacts: string = super.appendToBaseUrl('/find_all_bido_contacts');

	// public readonly findAllBidoCustomers: string = super.appendToBaseUrl('/find_all_bido_customers');

	// public readonly findAllBidoCounterReferences: string = super.appendToBaseUrl('/find_all_bido_counter_references');

	// public readonly createBidoContact: string = super.appendToBaseUrl('/create_bido_contact');

	// public readonly findBidoRating: string = super.appendToBaseUrl('/find_bido_rating');

	// public readonly findBidoCustomer: string = super.appendToBaseUrl('/find_bido_customer');

	// public readonly createBidoPn: string = super.appendToBaseUrl('/create_bido_pn');

	// public readonly createBidoRating: string = super.appendToBaseUrl('/create_bido_rating');

	// public readonly updateBidoPn: string = super.appendToBaseUrl('/update_bido_pn');

	// public readonly createBidoFl: string = super.appendToBaseUrl('/create_bido_fl');

	// public readonly updateBidoFl: string = super.appendToBaseUrl('/update_bido_fl');

	// public readonly removeBidoFl: string = super.appendToBaseUrl('/remove_bido_fl');

	// public readonly createBidoModel: string = super.appendToBaseUrl('/create_bido_model');

	// public readonly findBidoFl: string = super.appendToBaseUrl('/find_bido_fl');

	// public readonly findBidoFleet: string = super.appendToBaseUrl('/find_bido_fleet');

	// public readonly findAllBidoFls: string = super.appendToBaseUrl('/find_all_bido_fls');

	// public readonly findBidoPn: string = super.appendToBaseUrl('/find_bido_pn');

	// public readonly findBidoMission: string = super.appendToBaseUrl('/find_bido_mission');

	// public readonly setConnector: string = super.appendToBaseUrl('/set_connector');

	// public readonly removeBidoFleet: string = super.appendToBaseUrl('/remove_bido_fleet');

	// public readonly updateBidoFleet: string = super.appendToBaseUrl('/update_bido_fleet');

	// public readonly createBidoFleet: string = super.appendToBaseUrl('/create_bido_fleet');

	// public readonly saveBidoMission: string = super.appendToBaseUrl('/save_bido_mission');

	// public readonly createBidoDamage: string = super.appendToBaseUrl('/create_bido_damage');

	// public readonly updateBidoDamage: string = super.appendToBaseUrl('/update_bido_damage');

	// public readonly removeBidoDamage: string = super.appendToBaseUrl('/remove_bido_damage');

	// public readonly createBidoTask: string = super.appendToBaseUrl('/create_bido_task');

	// public readonly findBidoTask: string = super.appendToBaseUrl('/find_bido_task');

	// public readonly findAircraftList: string = super.appendToBaseUrl('/find_aircraft_list');

	// public readonly createBidoReport: string = super.appendToBaseUrl('/create_bido_report');

	// public readonly removeBidoReport: string = super.appendToBaseUrl('/remove_bido_report');

	// public readonly hasFmdNotClosed: string = super.appendToBaseUrl('/has_fmd_not_closed');

	// public readonly setUserExits: string = super.appendToBaseUrl('/set_user_exits');

	// public readonly removeBidoNotification: string = super.appendToBaseUrl('/remove_bido_notification');

	// public readonly findAllBidoFamilyVariants: string = super.appendToBaseUrl('/find_all_bido_family_variants');

	// public readonly findAllBidoOperators: string = super.appendToBaseUrl('/find_all_bido_operators');

	// public readonly findBidoAttribute: string = super.appendToBaseUrl('/find_bido_attribute');

	// public readonly findBidoEquipment: string = super.appendToBaseUrl('/find_bido_equipment');

	// public readonly findBidoEquipment: string = super.appendToBaseUrl('/find_bido_equipment');

	// public readonly findBidoContactsByCustomerCode: string = super.appendToBaseUrl('/find_bido_contacts_by_customer_code');

	// public readonly addBidoCusCustomers: string = super.appendToBaseUrl('/add_bido_cus_customers');

	// public readonly findBidoFamilyVariant: string = super.appendToBaseUrl('/find_bido_family_variant');

	// public readonly findBidoFamilyVariant: string = super.appendToBaseUrl('/find_bido_family_variant');

	// public readonly findBidoNotificationsByTask: string = super.appendToBaseUrl('/find_bido_notifications_by_task');

	// public readonly findAllBidoNotificationTypes: string = super.appendToBaseUrl('/find_all_bido_notification_types');

	// public readonly findBidoEquipmentCounter: string = super.appendToBaseUrl('/find_bido_equipment_counter');

	// public readonly findBidoFlsByEquipmentCode: string = super.appendToBaseUrl('/find_bido_fls_by_equipment_code');

	// public readonly findBidoEquipmentsByFlCode: string = super.appendToBaseUrl('/find_bido_equipments_by_fl_code');

	// public readonly findBidoEquipmentsByPnAndSnCodes: string = super.appendToBaseUrl('/find_bido_equipments_by_pn_and_sn_codes');

	// public readonly findBidoFlsByFlFlCode: string = super.appendToBaseUrl('/find_bido_fls_by_fl_fl_code');

	// public readonly findBidoFlsByCriteria: string = super.appendToBaseUrl('/find_bido_fls_by_criteria');

	// public readonly saveBidoEventExtension: string = super.appendToBaseUrl('/save_bido_event_extension');

	// public readonly saveBidoEventExtensions: string = super.appendToBaseUrl('/save_bido_event_extensions');

	// public readonly findBireItemByBidoEquipment: string = super.appendToBaseUrl('/find_bire_item_by_bido_equipment');

	// public readonly findDefectsByDetectionContext: string = super.appendToBaseUrl('/find_defects_by_detection_context');

	// public readonly findBidoFlightMeasuresByFlight: string = super.appendToBaseUrl('/find_bido_flight_measures_by_flight');

	// public readonly removeBidoFlightMeasuresByFlight: string = super.appendToBaseUrl('/remove_bido_flight_measures_by_flight');

	// public readonly findBidoFlightLoadsByFlight: string = super.appendToBaseUrl('/find_bido_flight_loads_by_flight');

	// public readonly removeBidoFlightLoadsByFlight: string = super.appendToBaseUrl('/remove_bido_flight_loads_by_flight');

	// public readonly getAttributeValueOfEquipment: string = super.appendToBaseUrl('/get_attribute_value_of_equipment');

	// public readonly updateBidoFlEquipmentStructure: string = super.appendToBaseUrl('/update_bido_fl_equipment_structure');

	// public readonly findBidoFlightAttribute: string = super.appendToBaseUrl('/find_bido_flight_attribute');

	// public readonly saveBidoFlightAttribute: string = super.appendToBaseUrl('/save_bido_flight_attribute');

	// public readonly findE5XMappingRowsByMandant: string = super.appendToBaseUrl('/find_e_5_x_mapping_rows_by_mandant');

	// public readonly findE5XEventTypesByFmdEventType: string = super.appendToBaseUrl('/find_e_5_x_event_types_by_fmd_event_type');

	// public readonly getUnitConversionMatrixRows: string = super.appendToBaseUrl('/get_unit_conversion_matrix_rows');

	// public readonly findBidoMeasuresByEquipmentAndCounterAndRatingCodes: string = super.appendToBaseUrl('/find_bido_measures_by_equipment_and_counter_and_rating_codes');

	// public readonly removeBidoMeasuresByMandantAndEquipmentCodeAfterDate: string = super.appendToBaseUrl('/remove_bido_measures_by_mandant_and_equipment_code_after_date');

	// public readonly removeBidoMeasuresByMandantAndEquipmentCodeAndFlight: string = super.appendToBaseUrl('/remove_bido_measures_by_mandant_and_equipment_code_and_flight');

	// public readonly findBidoFlEquipmentCurrentlyAppliedByEquipmentCode: string = super.appendToBaseUrl('/find_bido_fl_equipment_currently_applied_by_equipment_code');

	// public readonly findBidoEventExtensionTypedContextByNotificationCode: string = super.appendToBaseUrl('/find_bido_event_extension_typed_context_by_notification_code');

	// public readonly findBidoEventExtensionsTypedSymptomByNotificationCode: string = super.appendToBaseUrl('/find_bido_event_extensions_typed_symptom_by_notification_code');

	// public readonly findBidoEquipmentEvolutionsByEquipmentCodeAndIsApplied: string = super.appendToBaseUrl('/find_bido_equipment_evolutions_by_equipment_code_and_is_applied');

	// public readonly findBidoEquipmentEvolutionLastAppliedByEquipmentCode: string = super.appendToBaseUrl('/find_bido_equipment_evolution_last_applied_by_equipment_code');

	// public readonly findBidoEquipmentEvolutionsByEquipmentCodeListAndIsApplied: string = super.appendToBaseUrl('/find_bido_equipment_evolutions_by_equipment_code_list_and_is_applied');

	// public readonly removeAllBidoNotificationContactsByNotificationCode: string = super.appendToBaseUrl('/remove_all_bido_notification_contacts_by_notification_code');

	// public readonly findBidoMissionEquipmentsByEquipmentCodeAndMissionCode: string = super.appendToBaseUrl('/find_bido_mission_equipments_by_equipment_code_and_mission_code');

	// public readonly findBidoEquipmentsByItemAndOwnerAndOperatorAndFamilyVariantCodes: string = super.appendToBaseUrl('/find_bido_equipments_by_item_and_owner_and_operator_and_family_variant_codes');

	// public readonly findBidoEquipmentsByFamilyAndVariantAndPnAndSnCodes: string = super.appendToBaseUrl('/find_bido_equipments_by_family_and_variant_and_pn_and_sn_codes');

	// public readonly removeBidoNotificationEvolutionsByNotificationCode: string = super.appendToBaseUrl('/remove_bido_notification_evolutions_by_notification_code');

	// public readonly findBidoEquipmentCountersByEquipmentAndCounterCodes: string = super.appendToBaseUrl('/find_bido_equipment_counters_by_equipment_and_counter_codes');

	// public readonly findBidoNotificationCounterEquisByNotificationCode: string = super.appendToBaseUrl('/find_bido_notification_counter_equis_by_notification_code');

	// public readonly findBidoDocumentationsByMandantAndNotificationCodeAndFmdId: string = super.appendToBaseUrl('/find_bido_documentations_by_mandant_and_notification_code_and_fmd_id');

	// public readonly findBidoEquipmentsByFamilyVariantAndEquipmentAndPnCodesAndSnAndItemAndDesignation: string = super.appendToBaseUrl('/find_bido_equipments_by_family_variant_and_equipment_and_pn_codes_and_sn_and_item_and_designation');

	// public readonly findOperatorsBidoCustomersByOwnerCode: string = super.appendToBaseUrl('/find_operators_bido_customers_by_owner_code');

	// public readonly findBidoEquipmentsByItemAndFamilyVariantCode: string = super.appendToBaseUrl('/find_bido_equipments_by_item_and_family_variant_code');

	// public readonly findBidoEquipmentsByItemAndItemFather: string = super.appendToBaseUrl('/find_bido_equipments_by_item_and_item_father');

	// public readonly findBidoNotificationContactsByNotificationCode: string = super.appendToBaseUrl('/find_bido_notification_contacts_by_notification_code');

	// public readonly findBidoMissionEquipmentsByEquipmentCode: string = super.appendToBaseUrl('/find_bido_mission_equipments_by_equipment_code');

	// public readonly findBidoMissionEquipmentsBySearchCriteria: string = super.appendToBaseUrl('/find_bido_mission_equipments_by_search_criteria');

	// public readonly findBidoMissionEquipmentsByMissionCode: string = super.appendToBaseUrl('/find_bido_mission_equipments_by_mission_code');

	// public readonly findBidoEquipmentsByEquipmentFunction: string = super.appendToBaseUrl('/find_bido_equipments_by_equipment_function');

	// public readonly findBidoEquipmentsBySapEquipmentCode: string = super.appendToBaseUrl('/find_bido_equipments_by_sap_equipment_code');

	// public readonly removeBidoNotificationCounterEqui: string = super.appendToBaseUrl('/remove_bido_notification_counter_equi');

	// public readonly findBidoEquipmentCountersByEquipmentCode: string = super.appendToBaseUrl('/find_bido_equipment_counters_by_equipment_code');

	// public readonly findBidoEquipmentEvolutionsByEquipmentCode: string = super.appendToBaseUrl('/find_bido_equipment_evolutions_by_equipment_code');

	// public readonly findBidoNotificationCounterEquisByEquipmentCode: string = super.appendToBaseUrl('/find_bido_notification_counter_equis_by_equipment_code');

	// public readonly findBidoEquipmentAttributesByEquipmentCode: string = super.appendToBaseUrl('/find_bido_equipment_attributes_by_equipment_code');

	// public readonly findBidoNotificationAttributesByNotificationCode: string = super.appendToBaseUrl('/find_bido_notification_attributes_by_notification_code');

	// public readonly createBidoNotificationCounterEqui: string = super.appendToBaseUrl('/create_bido_notification_counter_equi');

	// public readonly updateBidoNotificationCounterEquiData: string = super.appendToBaseUrl('/update_bido_notification_counter_equi_data');

	// public readonly removeBidoNotificationCounterEquiData: string = super.appendToBaseUrl('/remove_bido_notification_counter_equi_data');

	// public readonly findBidoDocumentationsByEquipmentCode: string = super.appendToBaseUrl('/find_bido_documentations_by_equipment_code');

	// public readonly findBidoDocumentationsByNotificationCode: string = super.appendToBaseUrl('/find_bido_documentations_by_notification_code');

	// public readonly findBidoDocumentationsByCustomerCode: string = super.appendToBaseUrl('/find_bido_documentations_by_customer_code');

	// public readonly findBidoEquipmentsBySnAndAtaCodes: string = super.appendToBaseUrl('/find_bido_equipments_by_sn_and_ata_codes');

	// public readonly updateEquEquipmentCodeOfBidoEquipment: string = super.appendToBaseUrl('/update_equ_equipment_code_of_bido_equipment');

	// public readonly findBidoCustomerEvolutionsByCustomerCode: string = super.appendToBaseUrl('/find_bido_customer_evolutions_by_customer_code');

	// public readonly findBidoReportContentOfBidoReport: string = super.appendToBaseUrl('/find_bido_report_content_of_bido_report');

	// public readonly findBidoReportsByEquipmentCodeAndReportCode: string = super.appendToBaseUrl('/find_bido_reports_by_equipment_code_and_report_code');

	// public readonly findBidoReportsByEquipmentCodeAndReportCodes: string = super.appendToBaseUrl('/find_bido_reports_by_equipment_code_and_report_codes');

	// public readonly updateBidoNotificationCounterEqui: string = super.appendToBaseUrl('/update_bido_notification_counter_equi');

	// public readonly findLastBidoFmdEditionByNotificationCode: string = super.appendToBaseUrl('/find_last_bido_fmd_edition_by_notification_code');

	// public readonly findBidoEquipmentByAssetCodeAndRegistrationAndSN: string = super.appendToBaseUrl('/find_bido_equipment_by_asset_code_and_registration_and_sn');

	// public readonly removeBidoNotificationFMDByNotificationCode: string = super.appendToBaseUrl('/remove_bido_notification_fmd_by_notification_code');

	// public readonly findBidoReportsByFamilyVariantCodeAndFleetImportReportCode: string = super.appendToBaseUrl('/find_bido_reports_by_family_variant_code_and_fleet_import_report_code');

	// public readonly findNextAssemblyByEquipmentCodeAndSupEquipmentCode: string = super.appendToBaseUrl('/find_next_assembly_by_equipment_code_and_sup_equipment_code');

	// public readonly findNextDisassemblyByEquipmentCodeAndSupEquipmentCode: string = super.appendToBaseUrl('/find_next_disassembly_by_equipment_code_and_sup_equipment_code');

	// public readonly findBidoNotificationsAssociatedRecursivelyByNotificationCode: string = super.appendToBaseUrl('/find_bido_notifications_associated_recursively_by_notification_code');

	// public readonly removeBidoContact: string = super.appendToBaseUrl('/remove_bido_contact');

	// public readonly removeBidoNotificationEvolution: string = super.appendToBaseUrl('/remove_bido_notification_evolution');

	// public readonly removeBidoCustomer: string = super.appendToBaseUrl('/remove_bido_customer');

	// public readonly updateBidoContact: string = super.appendToBaseUrl('/update_bido_contact');

	// public readonly updateBidoCustomer: string = super.appendToBaseUrl('/update_bido_customer');

	// public readonly saveBidoSubscription: string = super.appendToBaseUrl('/save_bido_subscription');

	// public readonly createBidoExtension: string = super.appendToBaseUrl('/create_bido_extension');

	// public readonly updateBidoExtension: string = super.appendToBaseUrl('/update_bido_extension');

	// public readonly saveBidoExtension: string = super.appendToBaseUrl('/save_bido_extension');

	// public readonly saveBidoRootCause: string = super.appendToBaseUrl('/save_bido_root_cause');

	// public readonly createBidoCustomer: string = super.appendToBaseUrl('/create_bido_customer');

	// public readonly parameterAlreadyUsedInEvent: string = super.appendToBaseUrl('/parameter_already_used_in_event');

	// public readonly createBidoFlightMeasure: string = super.appendToBaseUrl('/create_bido_flight_measure');

	// public readonly createBidoFlightLoad: string = super.appendToBaseUrl('/create_bido_flight_load');

	// public readonly updateStatusOfBidoFmd: string = super.appendToBaseUrl('/update_status_of_bido_fmd');

	// public readonly createBidoReturnReason: string = super.appendToBaseUrl('/create_bido_return_reason');

	// public readonly updateBidoReturnReason: string = super.appendToBaseUrl('/update_bido_return_reason');

	// public readonly removeBidoReturnReason: string = super.appendToBaseUrl('/remove_bido_return_reason');

	// public readonly findAllBidoReturnReasons: string = super.appendToBaseUrl('/find_all_bido_return_reasons');

	// public readonly saveBidoMissionEquipment: string = super.appendToBaseUrl('/save_bido_mission_equipment');

	// public readonly removeBidoMission: string = super.appendToBaseUrl('/remove_bido_mission');

	// public readonly removeBidoMissionEquipment: string = super.appendToBaseUrl('/remove_bido_mission_equipment');

	// public readonly findAllBidoMissions: string = super.appendToBaseUrl('/find_all_bido_missions');

	// public readonly findAllBidoMissionEquipments: string = super.appendToBaseUrl('/find_all_bido_mission_equipments');

	// public readonly createBidoUnitMeasure: string = super.appendToBaseUrl('/create_bido_unit_measure');

	// public readonly updateBidoUnitMeasure: string = super.appendToBaseUrl('/update_bido_unit_measure');

	// public readonly createBidoEvolution: string = super.appendToBaseUrl('/create_bido_evolution');

	// public readonly findBidoEvolution: string = super.appendToBaseUrl('/find_bido_evolution');

	// public readonly createBidoCounterReference: string = super.appendToBaseUrl('/create_bido_counter_reference');

	// public readonly findBidoCounterReference: string = super.appendToBaseUrl('/find_bido_counter_reference');

	// public readonly updateBidoCounterReference: string = super.appendToBaseUrl('/update_bido_counter_reference');

	// public readonly createBidoEquipmentCounter: string = super.appendToBaseUrl('/create_bido_equipment_counter');

	// public readonly updateBidoEquipmentCounter: string = super.appendToBaseUrl('/update_bido_equipment_counter');

	// public readonly removeBidoEquipmentCounter: string = super.appendToBaseUrl('/remove_bido_equipment_counter');

	// public readonly createBidoEquipmentEvolution: string = super.appendToBaseUrl('/create_bido_equipment_evolution');

	// public readonly updateBidoEquipmentEvolution: string = super.appendToBaseUrl('/update_bido_equipment_evolution');

	// public readonly removeBidoEquipmentEvolution: string = super.appendToBaseUrl('/remove_bido_equipment_evolution');

	// public readonly createBidoNotification: string = super.appendToBaseUrl('/create_bido_notification');

	// public readonly createBidoNotificationContact: string = super.appendToBaseUrl('/create_bido_notification_contact');

	// public readonly updateBidoNotification: string = super.appendToBaseUrl('/update_bido_notification');

	// public readonly linkNotifications: string = super.appendToBaseUrl('/link_notifications');

	// public readonly findBidoEquipmentsByOwnerAndOperatorAndFamilyCodesAndEquipmentFunctionAndSn: string = super.appendToBaseUrl('/find_bido_equipments_by_owner_and_operator_and_family_codes_and_equipment_function_and_sn');

	// public readonly findBidoNotificationCounterEquisByEquipmentCodeAndNotificationCode: string = super.appendToBaseUrl('/find_bido_notification_counter_equis_by_equipment_code_and_notification_code');

	// public readonly findBidoNotificationCounterEqui: string = super.appendToBaseUrl('/find_bido_notification_counter_equi');

	// public readonly findBidoNotificationAttribute: string = super.appendToBaseUrl('/find_bido_notification_attribute');

	// public readonly createBidoEquipmentUsage: string = super.appendToBaseUrl('/create_bido_equipment_usage');

	// public readonly updateBidoEquipmentUsage: string = super.appendToBaseUrl('/update_bido_equipment_usage');

	// public readonly removeBidoEquipmentUsage: string = super.appendToBaseUrl('/remove_bido_equipment_usage');

	// public readonly findAllBidoMonths: string = super.appendToBaseUrl('/find_all_bido_months');

	// public readonly findAllBidoAttributes: string = super.appendToBaseUrl('/find_all_bido_attributes');

	// public readonly createBidoAttribute: string = super.appendToBaseUrl('/create_bido_attribute');

	// public readonly updateBidoAttribute: string = super.appendToBaseUrl('/update_bido_attribute');

	// public readonly removeBidoAttribute: string = super.appendToBaseUrl('/remove_bido_attribute');

	// public readonly createBidoEquipmentAttribute: string = super.appendToBaseUrl('/create_bido_equipment_attribute');

	// public readonly updateBidoEquipmentAttribute: string = super.appendToBaseUrl('/update_bido_equipment_attribute');

	// public readonly removeBidoEquipmentAttribute: string = super.appendToBaseUrl('/remove_bido_equipment_attribute');

	// public readonly findAllBidoEquipmentAttributes: string = super.appendToBaseUrl('/find_all_bido_equipment_attributes');

	// public readonly findBidoEquipmentAttribute: string = super.appendToBaseUrl('/find_bido_equipment_attribute');

	// public readonly findAllBidoDamages: string = super.appendToBaseUrl('/find_all_bido_damages');

	// public readonly findAllBidoNotificationDamages: string = super.appendToBaseUrl('/find_all_bido_notification_damages');

	// public readonly createBidoNotificationDamage: string = super.appendToBaseUrl('/create_bido_notification_damage');

	// public readonly createBidoNotificationAttribute: string = super.appendToBaseUrl('/create_bido_notification_attribute');

	// public readonly saveBidoNotificationAttribute: string = super.appendToBaseUrl('/save_bido_notification_attribute');

	// public readonly updateBidoNotificationDamage: string = super.appendToBaseUrl('/update_bido_notification_damage');

	// public readonly updateBidoNotificationAttribute: string = super.appendToBaseUrl('/update_bido_notification_attribute');

	// public readonly removeBidoNotificationDamage: string = super.appendToBaseUrl('/remove_bido_notification_damage');

	// public readonly removeBidoNotificationContact: string = super.appendToBaseUrl('/remove_bido_notification_contact');

	// public readonly removeBidoNotificationAttribute: string = super.appendToBaseUrl('/remove_bido_notification_attribute');

	// public readonly createBidoCustomerEvolution: string = super.appendToBaseUrl('/create_bido_customer_evolution');

	// public readonly createBidoDocumentation: string = super.appendToBaseUrl('/create_bido_documentation');

	// public readonly findBidoDocumentationsByFLCode: string = super.appendToBaseUrl('/find_bido_documentations_by_fl_code');

	// public readonly updateBlobOfBidoDocumentation: string = super.appendToBaseUrl('/update_blob_of_bido_documentation');

	// public readonly removeBidoDocumentation: string = super.appendToBaseUrl('/remove_bido_documentation');

	// public readonly updateBidoCustomerEvolution: string = super.appendToBaseUrl('/update_bido_customer_evolution');

	// public readonly removeBidoCustomerEvolution: string = super.appendToBaseUrl('/remove_bido_customer_evolution');

	// public readonly updatePnOfBidoEquipment: string = super.appendToBaseUrl('/update_pn_of_bido_equipment');

	// public readonly updatePnAndSnOfBidoEquipment: string = super.appendToBaseUrl('/update_pn_and_sn_of_bido_equipment');

	// public readonly updateFieldsOfBidoDocumentation: string = super.appendToBaseUrl('/update_fields_of_bido_documentation');

	// public readonly updateBidoEvolution: string = super.appendToBaseUrl('/update_bido_evolution');

	// public readonly updateBlobOfBidoReport: string = super.appendToBaseUrl('/update_blob_of_bido_report');

	// public readonly findBidoReportsByReportCode: string = super.appendToBaseUrl('/find_bido_reports_by_report_code');

	// public readonly findLastShopVisitByEquipmentCode: string = super.appendToBaseUrl('/find_last_shop_visit_by_equipment_code');

	// public readonly removeBidoEquipmentInCascade: string = super.appendToBaseUrl('/remove_bido_equipment_in_cascade');

	// public readonly findBidoFmdsByNotificationCode: string = super.appendToBaseUrl('/find_bido_fmds_by_notification_code');


	public constructor() {
		super(FleetManagementApi.baseUrl);
	}

}