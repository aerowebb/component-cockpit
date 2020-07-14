import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

@Injectable()
export class ProductStructureManagementApi extends AbstractApi {

	private static readonly baseUrl: string = '/product_structure_management';

	// public readonly findBirePnMeasuresByFamilyAndRatingsAndCountersAndPnsCodesWithLimits: string = super.appendToBaseUrl('/find_bire_pn_measures_by_family_and_ratings_and_counters_and_pns_codes_with_limits');

	// public readonly isBireItemASon: string = super.appendToBaseUrl('/is_bire_item_a_son');

	// public readonly findBireItem: string = super.appendToBaseUrl('/find_bire_item');

	// public readonly findBireItem: string = super.appendToBaseUrl('/find_bire_item');

	// public readonly findBireDocument: string = super.appendToBaseUrl('/find_bire_document');

	// public readonly findBirePn: string = super.appendToBaseUrl('/find_bire_pn');

	// public readonly createBireFamily: string = super.appendToBaseUrl('/create_bire_family');

	// public readonly createBireRating: string = super.appendToBaseUrl('/create_bire_rating');

	// public readonly updateBireFamily: string = super.appendToBaseUrl('/update_bire_family');

	// public readonly removeBireFamily: string = super.appendToBaseUrl('/remove_bire_family');

	// public readonly createBireItem: string = super.appendToBaseUrl('/create_bire_item');

	// public readonly updateBireItem: string = super.appendToBaseUrl('/update_bire_item');

	// public readonly removeBireItem: string = super.appendToBaseUrl('/remove_bire_item');

	// public readonly createBireModel: string = super.appendToBaseUrl('/create_bire_model');

	// public readonly removeBireModel: string = super.appendToBaseUrl('/remove_bire_model');

	// public readonly updateBireModel: string = super.appendToBaseUrl('/update_bire_model');

	// public readonly createBireIsn: string = super.appendToBaseUrl('/create_bire_isn');

	// public readonly findAllBireIsns: string = super.appendToBaseUrl('/find_all_bire_isns');

	// public readonly findBireFamily: string = super.appendToBaseUrl('/find_bire_family');

	// public readonly findBireRating: string = super.appendToBaseUrl('/find_bire_rating');

	// public readonly upgradeBireSB: string = super.appendToBaseUrl('/upgrade_bire_sb');

	// public readonly createBirePn: string = super.appendToBaseUrl('/create_bire_pn');

	// public readonly updateBirePn: string = super.appendToBaseUrl('/update_bire_pn');

	// public readonly createBireSb: string = super.appendToBaseUrl('/create_bire_sb');

	// public readonly updateBireSb: string = super.appendToBaseUrl('/update_bire_sb');

	// public readonly updateBireRating: string = super.appendToBaseUrl('/update_bire_rating');

	// public readonly findBireModel: string = super.appendToBaseUrl('/find_bire_model');

	// public readonly removeBireRating: string = super.appendToBaseUrl('/remove_bire_rating');

	// public readonly findBireSb: string = super.appendToBaseUrl('/find_bire_sb');

	// public readonly findAllBireItems: string = super.appendToBaseUrl('/find_all_bire_items');

	// public readonly findAllBirePns: string = super.appendToBaseUrl('/find_all_bire_pns');

	// public readonly removeBirePn: string = super.appendToBaseUrl('/remove_bire_pn');

	// public readonly findAllBireSbs: string = super.appendToBaseUrl('/find_all_bire_sbs');

	// public readonly removeBireSb: string = super.appendToBaseUrl('/remove_bire_sb');

	// public readonly createBireSite: string = super.appendToBaseUrl('/create_bire_site');

	// public readonly findBireSite: string = super.appendToBaseUrl('/find_bire_site');

	// public readonly removeBireSite: string = super.appendToBaseUrl('/remove_bire_site');

	// public readonly updateBireSite: string = super.appendToBaseUrl('/update_bire_site');

	// public readonly findAllBireSites: string = super.appendToBaseUrl('/find_all_bire_sites');

	// public readonly findAllBireSites: string = super.appendToBaseUrl('/find_all_bire_sites');

	// public readonly findBireItemSite: string = super.appendToBaseUrl('/find_bire_item_site');

	// public readonly createBireClass: string = super.appendToBaseUrl('/create_bire_class');

	// public readonly updateBireClass: string = super.appendToBaseUrl('/update_bire_class');

	// public readonly removeBireClass: string = super.appendToBaseUrl('/remove_bire_class');

	// public readonly createBireReport: string = super.appendToBaseUrl('/create_bire_report');

	// public readonly removeBireReport: string = super.appendToBaseUrl('/remove_bire_report');

	// public readonly createBireDocSb: string = super.appendToBaseUrl('/create_bire_doc_sb');

	// public readonly removeBireDocSb: string = super.appendToBaseUrl('/remove_bire_doc_sb');

	// public readonly findBireQualificationsByVariantPK: string = super.appendToBaseUrl('/find_bire_qualifications_by_variant_pk');

	// public readonly findBireItemVersionsByItemAndPnCode: string = super.appendToBaseUrl('/find_bire_item_versions_by_item_and_pn_code');

	// public readonly findBireItemVersionsByItemAndPnCodeList: string = super.appendToBaseUrl('/find_bire_item_versions_by_item_and_pn_code_list');

	// public readonly findBireTilItemsByFamilyVariantCodes: string = super.appendToBaseUrl('/find_bire_til_items_by_family_variant_codes');

	// public readonly findBireVersionPnsByItemNumberAndPnCode: string = super.appendToBaseUrl('/find_bire_version_pns_by_item_number_and_pn_code');

	// public readonly findBireAlternativePnsByItemAndPnCodeOrPnPnCode: string = super.appendToBaseUrl('/find_bire_alternative_pns_by_item_and_pn_code_or_pn_pn_code');

	// public readonly findBireItemPnEvolutionsByItemAndPnPnCode: string = super.appendToBaseUrl('/find_bire_item_pn_evolutions_by_item_and_pn_pn_code');

	// public readonly findBireItemPnEvolutionsByItemAndPnCode: string = super.appendToBaseUrl('/find_bire_item_pn_evolutions_by_item_and_pn_code');

	// public readonly findBireEvolutionEvolutionsByEvolutionEvolution: string = super.appendToBaseUrl('/find_bire_evolution_evolutions_by_evolution_evolution');

	// public readonly findBireEvolutionsByItemAndPnPnCode: string = super.appendToBaseUrl('/find_bire_evolutions_by_item_and_pn_pn_code');

	// public readonly findBireItemPnEvolutionsByItemAndEvolution: string = super.appendToBaseUrl('/find_bire_item_pn_evolutions_by_item_and_evolution');

	// public readonly findBireEvolutionItemsByItemAndEvolution: string = super.appendToBaseUrl('/find_bire_evolution_items_by_item_and_evolution');

	// public readonly findBireEvolutionEvolutionsByEvolution: string = super.appendToBaseUrl('/find_bire_evolution_evolutions_by_evolution');

	// public readonly checkAndReturnNewRevisionNumberBySB: string = super.appendToBaseUrl('/check_and_return_new_revision_number_by_sb');

	// public readonly checkAndReturnNewRevisionNumberByEvolution: string = super.appendToBaseUrl('/check_and_return_new_revision_number_by_evolution');

	// public readonly checkAndReturnNewRevisionNumberByModification: string = super.appendToBaseUrl('/check_and_return_new_revision_number_by_modification');

	// public readonly findTopFathersBireItemsByFamilyAndVariantCodes: string = super.appendToBaseUrl('/find_top_fathers_bire_items_by_family_and_variant_codes');

	// public readonly findBireModificationsByEvolutionNumbers: string = super.appendToBaseUrl('/find_bire_modifications_by_evolution_numbers');

	// public readonly removeBireItemsByFamilyAndVariantCodes: string = super.appendToBaseUrl('/remove_bire_items_by_family_and_variant_codes');

	// public readonly removeBireDamageItemsByFamilyAndVariantCodes: string = super.appendToBaseUrl('/remove_bire_damage_items_by_family_and_variant_codes');

	// public readonly removeBireLocalisationItemsByItem: string = super.appendToBaseUrl('/remove_bire_localisation_items_by_item');

	// public readonly findBireModificationsByFamilyAndVariantCodes: string = super.appendToBaseUrl('/find_bire_modifications_by_family_and_variant_codes');

	// public readonly findBireEvolutionPnsByItemAndEvolution: string = super.appendToBaseUrl('/find_bire_evolution_pns_by_item_and_evolution');

	// public readonly findBireEvolutionPnsByItemAndPnCode: string = super.appendToBaseUrl('/find_bire_evolution_pns_by_item_and_pn_code');

	// public readonly findBireVariantVersionsByFamilyCode: string = super.appendToBaseUrl('/find_bire_variant_versions_by_family_code');

	// public readonly findBireVariantVersionsByFamilyAndVariantCodes: string = super.appendToBaseUrl('/find_bire_variant_versions_by_family_and_variant_codes');

	// public readonly findBireItemsByFamilyAndVariantCodes: string = super.appendToBaseUrl('/find_bire_items_by_family_and_variant_codes');

	// public readonly findBireItemsByFamilyAndVariantCodes: string = super.appendToBaseUrl('/find_bire_items_by_family_and_variant_codes');

	// public readonly findBireItemsInMelByFamilyAndVariantCodes: string = super.appendToBaseUrl('/find_bire_items_in_mel_by_family_and_variant_codes');

	// public readonly findFathersBireItemsByFamilyAndVariantCodes: string = super.appendToBaseUrl('/find_fathers_bire_items_by_family_and_variant_codes');

	// public readonly findSonsBireItemsByFamilyAndVariantCodes: string = super.appendToBaseUrl('/find_sons_bire_items_by_family_and_variant_codes');

	// public readonly isBireEvolutionEligibleToConfiguration: string = super.appendToBaseUrl('/is_bire_evolution_eligible_to_configuration');

	// public readonly findBireVariantVersionsByFamilyFunction: string = super.appendToBaseUrl('/find_bire_variant_versions_by_family_function');

	// public readonly findBireItemPnEvolutionsByPnCodeOrPnPnCode: string = super.appendToBaseUrl('/find_bire_item_pn_evolutions_by_pn_code_or_pn_pn_code');

	// public readonly createOrUpdateBireVpAttributeList: string = super.appendToBaseUrl('/create_or_update_bire_vp_attribute_list');

	// public readonly findBireEvolutionsByFamilyAndVariantCodes: string = super.appendToBaseUrl('/find_bire_evolutions_by_family_and_variant_codes');

	// public readonly findBireEvolutionPKsByFamilyAndVariantCodes: string = super.appendToBaseUrl('/find_bire_evolution_p_ks_by_family_and_variant_codes');

	// public readonly removeBireRatingVariant: string = super.appendToBaseUrl('/remove_bire_rating_variant');

	// public readonly createBireQualifVariant: string = super.appendToBaseUrl('/create_bire_qualif_variant');

	// public readonly removeBireQualifVariant: string = super.appendToBaseUrl('/remove_bire_qualif_variant');

	// public readonly createBireVariantVersion: string = super.appendToBaseUrl('/create_bire_variant_version');

	// public readonly updateBireVariantVersion: string = super.appendToBaseUrl('/update_bire_variant_version');

	// public readonly removeBireVariantVersion: string = super.appendToBaseUrl('/remove_bire_variant_version');

	// public readonly createBireItemVersion: string = super.appendToBaseUrl('/create_bire_item_version');

	// public readonly updateBireItemVersion: string = super.appendToBaseUrl('/update_bire_item_version');

	// public readonly removeBireItemVersion: string = super.appendToBaseUrl('/remove_bire_item_version');

	// public readonly removeBireItemAttribute: string = super.appendToBaseUrl('/remove_bire_item_attribute');

	// public readonly removeBireSbAttribute: string = super.appendToBaseUrl('/remove_bire_sb_attribute');

	// public readonly removeBireModificationAttribute: string = super.appendToBaseUrl('/remove_bire_modification_attribute');

	// public readonly removeBireEvolutionAttribute: string = super.appendToBaseUrl('/remove_bire_evolution_attribute');

	// public readonly removeBireVpAttribute: string = super.appendToBaseUrl('/remove_bire_vp_attribute');

	// public readonly removeBireVariantAttribute: string = super.appendToBaseUrl('/remove_bire_variant_attribute');

	// public readonly removeBirePnAttribute: string = super.appendToBaseUrl('/remove_bire_pn_attribute');

	// public readonly createBireItemPnEvolution: string = super.appendToBaseUrl('/create_bire_item_pn_evolution');

	// public readonly updateBireItemAttribute: string = super.appendToBaseUrl('/update_bire_item_attribute');

	// public readonly updateBireSbAttribute: string = super.appendToBaseUrl('/update_bire_sb_attribute');

	// public readonly updateBireModificationAttribute: string = super.appendToBaseUrl('/update_bire_modification_attribute');

	// public readonly updateBireEvolutionAttribute: string = super.appendToBaseUrl('/update_bire_evolution_attribute');

	// public readonly updateBireVpAttribute: string = super.appendToBaseUrl('/update_bire_vp_attribute');

	// public readonly updateBireVariantAttribute: string = super.appendToBaseUrl('/update_bire_variant_attribute');

	// public readonly updateBirePnAttribute: string = super.appendToBaseUrl('/update_bire_pn_attribute');

	// public readonly updateBireItemPnEvolution: string = super.appendToBaseUrl('/update_bire_item_pn_evolution');

	// public readonly removeBireItemPnEvolution: string = super.appendToBaseUrl('/remove_bire_item_pn_evolution');

	// public readonly removeBireItemPnEvolutionsByItem: string = super.appendToBaseUrl('/remove_bire_item_pn_evolutions_by_item');

	// public readonly createBireAlternativePn: string = super.appendToBaseUrl('/create_bire_alternative_pn');

	// public readonly updateBireAlternativePn: string = super.appendToBaseUrl('/update_bire_alternative_pn');

	// public readonly removeBireAlternativePn: string = super.appendToBaseUrl('/remove_bire_alternative_pn');

	// public readonly createBireVersionPn: string = super.appendToBaseUrl('/create_bire_version_pn');

	// public readonly updateBireVersionPn: string = super.appendToBaseUrl('/update_bire_version_pn');

	// public readonly removeBireVersionPn: string = super.appendToBaseUrl('/remove_bire_version_pn');

	// public readonly findAllPnsAsStrings: string = super.appendToBaseUrl('/find_all_pns_as_strings');

	// public readonly createBireItemItem: string = super.appendToBaseUrl('/create_bire_item_item');

	// public readonly findBireVariantVersion: string = super.appendToBaseUrl('/find_bire_variant_version');

	// public readonly removeBireItemItem: string = super.appendToBaseUrl('/remove_bire_item_item');

	// public readonly findBireItemVersionsByItem: string = super.appendToBaseUrl('/find_bire_item_versions_by_item');

	// public readonly findBireRatingsByFamilyPK: string = super.appendToBaseUrl('/find_bire_ratings_by_family_pk');

	// public readonly findBireRatingsByVariantPK: string = super.appendToBaseUrl('/find_bire_ratings_by_variant_pk');

	// public readonly findBireItemMaintenanceByItem: string = super.appendToBaseUrl('/find_bire_item_maintenance_by_item');

	// public readonly findBireVersionPnsByItem: string = super.appendToBaseUrl('/find_bire_version_pns_by_item');

	// public readonly findBireVersionPnsByItemVersion: string = super.appendToBaseUrl('/find_bire_version_pns_by_item_version');

	// public readonly findBireActionType: string = super.appendToBaseUrl('/find_bire_action_type');

	// public readonly findBireEvolutionItemsByItem: string = super.appendToBaseUrl('/find_bire_evolution_items_by_item');

	// public readonly findBireEvolutionsByItem: string = super.appendToBaseUrl('/find_bire_evolutions_by_item');

	// public readonly findBireInterdependence: string = super.appendToBaseUrl('/find_bire_interdependence');

	// public readonly findBireEvolutionsBySb: string = super.appendToBaseUrl('/find_bire_evolutions_by_sb');

	// public readonly upgradeBireEvolution: string = super.appendToBaseUrl('/upgrade_bire_evolution');

	// public readonly upgradeBireModification: string = super.appendToBaseUrl('/upgrade_bire_modification');

	// public readonly findBireModification: string = super.appendToBaseUrl('/find_bire_modification');

	// public readonly findBireVersionPn: string = super.appendToBaseUrl('/find_bire_version_pn');

	// public readonly findQuantityByItemAndPnCode: string = super.appendToBaseUrl('/find_quantity_by_item_and_pn_code');

	// public readonly createBirePartner: string = super.appendToBaseUrl('/create_bire_partner');

	// public readonly updateBirePartner: string = super.appendToBaseUrl('/update_bire_partner');

	// public readonly removeBirePartner: string = super.appendToBaseUrl('/remove_bire_partner');

	// public readonly findBirePartnersByVariant: string = super.appendToBaseUrl('/find_bire_partners_by_variant');

	// public readonly createBireEvolutionItem: string = super.appendToBaseUrl('/create_bire_evolution_item');

	// public readonly updateBireEvolutionItem: string = super.appendToBaseUrl('/update_bire_evolution_item');

	// public readonly createBireEvolutionEvolution: string = super.appendToBaseUrl('/create_bire_evolution_evolution');

	// public readonly updateBireEvolutionEvolution: string = super.appendToBaseUrl('/update_bire_evolution_evolution');

	// public readonly createBireEvolution: string = super.appendToBaseUrl('/create_bire_evolution');

	// public readonly updateBireEvolution: string = super.appendToBaseUrl('/update_bire_evolution');

	// public readonly createBireModification: string = super.appendToBaseUrl('/create_bire_modification');

	// public readonly createBireVersionMeasure: string = super.appendToBaseUrl('/create_bire_version_measure');

	// public readonly updateBireVersionMeasure: string = super.appendToBaseUrl('/update_bire_version_measure');

	// public readonly createBireMeasureReference: string = super.appendToBaseUrl('/create_bire_measure_reference');

	// public readonly updateBireMeasureReference: string = super.appendToBaseUrl('/update_bire_measure_reference');

	// public readonly createBireUnitMeasure: string = super.appendToBaseUrl('/create_bire_unit_measure');

	// public readonly updateBireUnitMeasure: string = super.appendToBaseUrl('/update_bire_unit_measure');

	// public readonly updateBireModification: string = super.appendToBaseUrl('/update_bire_modification');

	// public readonly findBireModelsByVariantPK: string = super.appendToBaseUrl('/find_bire_models_by_variant_pk');

	// public readonly findBireModelsBySearchCriteria: string = super.appendToBaseUrl('/find_bire_models_by_search_criteria');

	// public readonly createBireModificationVariant: string = super.appendToBaseUrl('/create_bire_modification_variant');

	// public readonly updateBireModificationVariant: string = super.appendToBaseUrl('/update_bire_modification_variant');

	// public readonly removeBireDamageItemsByItem: string = super.appendToBaseUrl('/remove_bire_damage_items_by_item');

	// public readonly findBireVersionMeasure: string = super.appendToBaseUrl('/find_bire_version_measure');

	// public readonly findBireUnitMeasure: string = super.appendToBaseUrl('/find_bire_unit_measure');

	// public readonly findBireApplicability: string = super.appendToBaseUrl('/find_bire_applicability');

	// public readonly countAOFamilyVariants: string = super.appendToBaseUrl('/count_ao_family_variants');

	// public readonly findAllAOPossibleConnections: string = super.appendToBaseUrl('/find_all_ao_possible_connections');

	// public readonly setAODriverNumber: string = super.appendToBaseUrl('/set_ao_driver_number');

	// public readonly createBireModificationEvolution: string = super.appendToBaseUrl('/create_bire_modification_evolution');

	// public readonly createBireEvolutionSb: string = super.appendToBaseUrl('/create_bire_evolution_sb');

	// public readonly findBireVariantVersionByFamilyNameAndVariantNameAndStructureType: string = super.appendToBaseUrl('/find_bire_variant_version_by_family_name_and_variant_name_and_structure_type');

	// public readonly findBirePnMeasuresByFamilyCodeAndStructureTypeAndVariantCode: string = super.appendToBaseUrl('/find_bire_pn_measures_by_family_code_and_structure_type_and_variant_code');

	// public readonly removeBireItemVersionsByItemExceptItemVersionsNotToBeRemovedList: string = super.appendToBaseUrl('/remove_bire_item_versions_by_item_except_item_versions_not_to_be_removed_list');

	// public readonly findBireItemVersionsByFamilyAndVariantAndFunctionCodes: string = super.appendToBaseUrl('/find_bire_item_versions_by_family_and_variant_and_function_codes');

	// public readonly findAllBireFamilys: string = super.appendToBaseUrl('/find_all_bire_familys');

	// public readonly findAllBireFamilys: string = super.appendToBaseUrl('/find_all_bire_familys');

	// public readonly findBireItemsByItemSon: string = super.appendToBaseUrl('/find_bire_items_by_item_son');

	// public readonly findBireItemsBySearchCriteria: string = super.appendToBaseUrl('/find_bire_items_by_search_criteria');

	// public readonly findBireRatingsBySearchCriteria: string = super.appendToBaseUrl('/find_bire_ratings_by_search_criteria');

	// public readonly findBireItemsByItemFather: string = super.appendToBaseUrl('/find_bire_items_by_item_father');

	// public readonly findBireFamilysByFamilyCode: string = super.appendToBaseUrl('/find_bire_familys_by_family_code');

	// public readonly findBireItemPnEvolutionsByItem: string = super.appendToBaseUrl('/find_bire_item_pn_evolutions_by_item');

	// public readonly findBireAlternativePnsByItem: string = super.appendToBaseUrl('/find_bire_alternative_pns_by_item');

	// public readonly findBireAlternativePn: string = super.appendToBaseUrl('/find_bire_alternative_pn');

	// public readonly findBireEvolution: string = super.appendToBaseUrl('/find_bire_evolution');

	// public readonly findBireVersionPnsByFigure: string = super.appendToBaseUrl('/find_bire_version_pns_by_figure');

	// public readonly createBireRatingVariant: string = super.appendToBaseUrl('/create_bire_rating_variant');

	// public readonly findBireEvolutionsByItemAndPnAndPnPnAndActionTypeCodes: string = super.appendToBaseUrl('/find_bire_evolutions_by_item_and_pn_and_pn_pn_and_action_type_codes');

	// public readonly removeBireItemMaintenancesByFamilyAndVariantCodes: string = super.appendToBaseUrl('/remove_bire_item_maintenances_by_family_and_variant_codes');

	// public readonly removeBireLocalisationItemsByFamilyAndVariantCodes: string = super.appendToBaseUrl('/remove_bire_localisation_items_by_family_and_variant_codes');

	// public readonly findBireModificationVariantsByFamilyAndVariantCodes: string = super.appendToBaseUrl('/find_bire_modification_variants_by_family_and_variant_codes');

	// public readonly findBireModificationVariantsByModificationAndVariantCode: string = super.appendToBaseUrl('/find_bire_modification_variants_by_modification_and_variant_code');

	// public readonly findBireSbsByFamilyAndVariantCodesAndNotLinkedToEvolution: string = super.appendToBaseUrl('/find_bire_sbs_by_family_and_variant_codes_and_not_linked_to_evolution');

	// public readonly findBirePackEvolutionsByItemAndPackBaseOptionCode: string = super.appendToBaseUrl('/find_bire_pack_evolutions_by_item_and_pack_base_option_code');

	// public readonly removeBirePackEvolutionsByItemAndPackBaseOptionCode: string = super.appendToBaseUrl('/remove_bire_pack_evolutions_by_item_and_pack_base_option_code');

	// public readonly findBireConfigurationPacksByItemVersionAndConfigurationCode: string = super.appendToBaseUrl('/find_bire_configuration_packs_by_item_version_and_configuration_code');

	// public readonly removeBireConfigurationPacksByItemVersionAndConfigurationCode: string = super.appendToBaseUrl('/remove_bire_configuration_packs_by_item_version_and_configuration_code');

	// public readonly findBirePackEvolutionsByFamilyAndVariantCodesAndPackBaseOption: string = super.appendToBaseUrl('/find_bire_pack_evolutions_by_family_and_variant_codes_and_pack_base_option');

	// public readonly findBireConfigurationPacksByItemAndConfigurationCode: string = super.appendToBaseUrl('/find_bire_configuration_packs_by_item_and_configuration_code');

	// public readonly removeBireEvolutionVariantsByFamilyAndVariantCodes: string = super.appendToBaseUrl('/remove_bire_evolution_variants_by_family_and_variant_codes');

	// public readonly removeBireEvolutionEvolutionsByFamilyAndVariantCodes: string = super.appendToBaseUrl('/remove_bire_evolution_evolutions_by_family_and_variant_codes');

	// public readonly updateBireApplicabilityDateAndStatusOfEvolutionVariants: string = super.appendToBaseUrl('/update_bire_applicability_date_and_status_of_evolution_variants');

	// public readonly findBireAlternativePnsByItemVersionAndPnCodeOrPnPnCode: string = super.appendToBaseUrl('/find_bire_alternative_pns_by_item_version_and_pn_code_or_pn_pn_code');

	// public readonly removeBireAlternativePnsByItemVersionAndPnCodeOrPnPnCode: string = super.appendToBaseUrl('/remove_bire_alternative_pns_by_item_version_and_pn_code_or_pn_pn_code');

	// public readonly removeBireItemPnEvolutionsByItemAndPnCodeOrPnPnCode: string = super.appendToBaseUrl('/remove_bire_item_pn_evolutions_by_item_and_pn_code_or_pn_pn_code');

	// public readonly findBireItemPnEvolutionsByItemAndPnPnCodeAndQtyAfter: string = super.appendToBaseUrl('/find_bire_item_pn_evolutions_by_item_and_pn_pn_code_and_qty_after');

	// public readonly removeBireConfigurationPacksByItemAndConfigurationCode: string = super.appendToBaseUrl('/remove_bire_configuration_packs_by_item_and_configuration_code');

	// public readonly findBireModificationEvolutionsByModificationNumbers: string = super.appendToBaseUrl('/find_bire_modification_evolutions_by_modification_numbers');

	// public readonly removeBireItemsByFamilyAndVariantCodesExceptItemsNotToBeRemovedList: string = super.appendToBaseUrl('/remove_bire_items_by_family_and_variant_codes_except_items_not_to_be_removed_list');

	// public readonly findBireItemMaintenancesByItemAndKPourcentCodeAndRepairCenterCode: string = super.appendToBaseUrl('/find_bire_item_maintenances_by_item_and_k_pourcent_code_and_repair_center_code');

	// public readonly findBireSbsByEvolutionNumbers: string = super.appendToBaseUrl('/find_bire_sbs_by_evolution_numbers');

	// public readonly findBireEvolutionsByModification: string = super.appendToBaseUrl('/find_bire_evolutions_by_modification');

	// public readonly updateBireEvolutionSb: string = super.appendToBaseUrl('/update_bire_evolution_sb');

	// public readonly updateBireModificationEvolution: string = super.appendToBaseUrl('/update_bire_modification_evolution');

	// public readonly findBireEvolutionPnsByPnCode: string = super.appendToBaseUrl('/find_bire_evolution_pns_by_pn_code');

	// public readonly findBireEvolutionPnsByItem: string = super.appendToBaseUrl('/find_bire_evolution_pns_by_item');

	// public readonly createBireEvolutionPn: string = super.appendToBaseUrl('/create_bire_evolution_pn');

	// public readonly updateBireEvolutionPn: string = super.appendToBaseUrl('/update_bire_evolution_pn');

	// public readonly removeBireEvolutionItem: string = super.appendToBaseUrl('/remove_bire_evolution_item');

	// public readonly removeBireEvolutionItemsByItem: string = super.appendToBaseUrl('/remove_bire_evolution_items_by_item');

	// public readonly removeBireEvolutionPn: string = super.appendToBaseUrl('/remove_bire_evolution_pn');

	// public readonly removeBireEvolutionPnsByItem: string = super.appendToBaseUrl('/remove_bire_evolution_pns_by_item');

	// public readonly createBireSbVariant: string = super.appendToBaseUrl('/create_bire_sb_variant');

	// public readonly updateBireSbVariant: string = super.appendToBaseUrl('/update_bire_sb_variant');

	// public readonly removeBireSbVariant: string = super.appendToBaseUrl('/remove_bire_sb_variant');

	// public readonly findBirePackBaseOptionsByItem: string = super.appendToBaseUrl('/find_bire_pack_base_options_by_item');

	// public readonly findBireConfigurationsByItem: string = super.appendToBaseUrl('/find_bire_configurations_by_item');

	// public readonly createBireConfiguration: string = super.appendToBaseUrl('/create_bire_configuration');

	// public readonly updateBireConfiguration: string = super.appendToBaseUrl('/update_bire_configuration');

	// public readonly removeBireConfiguration: string = super.appendToBaseUrl('/remove_bire_configuration');

	// public readonly createBireConfigurationPack: string = super.appendToBaseUrl('/create_bire_configuration_pack');

	// public readonly createBirePackBaseOption: string = super.appendToBaseUrl('/create_bire_pack_base_option');

	// public readonly findAllBirePackBaseOptions: string = super.appendToBaseUrl('/find_all_bire_pack_base_options');

	// public readonly removeBirePackBaseOption: string = super.appendToBaseUrl('/remove_bire_pack_base_option');

	// public readonly updateBirePackBaseOption: string = super.appendToBaseUrl('/update_bire_pack_base_option');

	// public readonly createBirePackEvolution: string = super.appendToBaseUrl('/create_bire_pack_evolution');

	// public readonly removeBirePackEvolution: string = super.appendToBaseUrl('/remove_bire_pack_evolution');

	// public readonly updateBirePackEvolution: string = super.appendToBaseUrl('/update_bire_pack_evolution');

	// public readonly findBireVersionPnsByPnCode: string = super.appendToBaseUrl('/find_bire_version_pns_by_pn_code');

	// public readonly findBireItemAttributesByItem: string = super.appendToBaseUrl('/find_bire_item_attributes_by_item');

	// public readonly findBireSbAttributesBySb: string = super.appendToBaseUrl('/find_bire_sb_attributes_by_sb');

	// public readonly findBireVpAttributesByVersionPn: string = super.appendToBaseUrl('/find_bire_vp_attributes_by_version_pn');

	// public readonly findBirePnAttributesByPn: string = super.appendToBaseUrl('/find_bire_pn_attributes_by_pn');

	// public readonly findBirePnAttribute: string = super.appendToBaseUrl('/find_bire_pn_attribute');

	// public readonly findBireSbAttribute: string = super.appendToBaseUrl('/find_bire_sb_attribute');

	// public readonly findBireModificationAttribute: string = super.appendToBaseUrl('/find_bire_modification_attribute');

	// public readonly findBireItemAttribute: string = super.appendToBaseUrl('/find_bire_item_attribute');

	// public readonly findBireEvolutionAttribute: string = super.appendToBaseUrl('/find_bire_evolution_attribute');

	// public readonly findBireVpAttribute: string = super.appendToBaseUrl('/find_bire_vp_attribute');

	// public readonly findAllBireEvolutions: string = super.appendToBaseUrl('/find_all_bire_evolutions');

	// public readonly findBireEvolutionEvolution: string = super.appendToBaseUrl('/find_bire_evolution_evolution');

	// public readonly findAllBireActionTypes: string = super.appendToBaseUrl('/find_all_bire_action_types');

	// public readonly removeBireEvolution: string = super.appendToBaseUrl('/remove_bire_evolution');

	// public readonly findAllBireEvolutionEvolutions: string = super.appendToBaseUrl('/find_all_bire_evolution_evolutions');

	// public readonly removeBireEvolutionEvolution: string = super.appendToBaseUrl('/remove_bire_evolution_evolution');

	// public readonly findBireEvolutionPnsByEvolution: string = super.appendToBaseUrl('/find_bire_evolution_pns_by_evolution');

	// public readonly removeBireEvolutionSb: string = super.appendToBaseUrl('/remove_bire_evolution_sb');

	// public readonly createBireEvolutionVariant: string = super.appendToBaseUrl('/create_bire_evolution_variant');

	// public readonly updateBireEvolutionVariant: string = super.appendToBaseUrl('/update_bire_evolution_variant');

	// public readonly removeBireEvolutionVariant: string = super.appendToBaseUrl('/remove_bire_evolution_variant');

	// public readonly findAllBireApplicabilitys: string = super.appendToBaseUrl('/find_all_bire_applicabilitys');

	// public readonly updateBireLevelOfItem: string = super.appendToBaseUrl('/update_bire_level_of_item');

	// public readonly updateBireFixedItemOfItems: string = super.appendToBaseUrl('/update_bire_fixed_item_of_items');

	// public readonly removeBireConfigurationsByItem: string = super.appendToBaseUrl('/remove_bire_configurations_by_item');

	// public readonly findAllBireInterdependences: string = super.appendToBaseUrl('/find_all_bire_interdependences');

	// public readonly findAllBireMeasureReferences: string = super.appendToBaseUrl('/find_all_bire_measure_references');

	// public readonly removeBireMeasureReference: string = super.appendToBaseUrl('/remove_bire_measure_reference');

	// public readonly findAllBireModifications: string = super.appendToBaseUrl('/find_all_bire_modifications');

	// public readonly removeBireModification: string = super.appendToBaseUrl('/remove_bire_modification');

	// public readonly findBireModificationsByEvolution: string = super.appendToBaseUrl('/find_bire_modifications_by_evolution');

	// public readonly removeBireModificationEvolution: string = super.appendToBaseUrl('/remove_bire_modification_evolution');

	// public readonly findBireSbsByEvolution: string = super.appendToBaseUrl('/find_bire_sbs_by_evolution');

	// public readonly findBireEvolutionSbsByEvolution: string = super.appendToBaseUrl('/find_bire_evolution_sbs_by_evolution');

	// public readonly findBireEvolutionSbsBySb: string = super.appendToBaseUrl('/find_bire_evolution_sbs_by_sb');

	// public readonly findAllBireModificationVariants: string = super.appendToBaseUrl('/find_all_bire_modification_variants');

	// public readonly removeBireModificationVariant: string = super.appendToBaseUrl('/remove_bire_modification_variant');

	// public readonly removeBirePackBaseOptionsByItem: string = super.appendToBaseUrl('/remove_bire_pack_base_options_by_item');

	// public readonly findBirePnMeasuresByPnCode: string = super.appendToBaseUrl('/find_bire_pn_measures_by_pn_code');

	// public readonly findBirePnMeasure: string = super.appendToBaseUrl('/find_bire_pn_measure');

	// public readonly createBirePnMeasure: string = super.appendToBaseUrl('/create_bire_pn_measure');

	// public readonly updateBirePnMeasure: string = super.appendToBaseUrl('/update_bire_pn_measure');

	// public readonly removeBirePnMeasure: string = super.appendToBaseUrl('/remove_bire_pn_measure');

	// public readonly findBireSbVariantsBySbNumbers: string = super.appendToBaseUrl('/find_bire_sb_variants_by_sb_numbers');

	// public readonly findAllBireUnitMeasures: string = super.appendToBaseUrl('/find_all_bire_unit_measures');

	// public readonly removeBireUnitMeasure: string = super.appendToBaseUrl('/remove_bire_unit_measure');

	// public readonly findAllBireVariantVersions: string = super.appendToBaseUrl('/find_all_bire_variant_versions');

	// public readonly findBireVariantVersionsByPnCode: string = super.appendToBaseUrl('/find_bire_variant_versions_by_pn_code');

	// public readonly removeBireVersionPnsByItem: string = super.appendToBaseUrl('/remove_bire_version_pns_by_item');

	// public readonly findBireVersionPnsByItemAndIsn: string = super.appendToBaseUrl('/find_bire_version_pns_by_item_and_isn');

	// public readonly findBirePnsBySearchCriteria: string = super.appendToBaseUrl('/find_bire_pns_by_search_criteria');

	// public readonly findProductsBySearchCriteria: string = super.appendToBaseUrl('/find_products_by_search_criteria');

	// public readonly findBireSbsBySbPKAndDesignation: string = super.appendToBaseUrl('/find_bire_sbs_by_sb_pk_and_designation');

	// public readonly findBireSbsBySbCriteria: string = super.appendToBaseUrl('/find_bire_sbs_by_sb_criteria');

	// public readonly findBireSbsBySbCriteria: string = super.appendToBaseUrl('/find_bire_sbs_by_sb_criteria');

	// public readonly findBireVersionMeasuresByItem: string = super.appendToBaseUrl('/find_bire_version_measures_by_item');

	// public readonly findBireSbVariantsByFamilyAndVariantCodes: string = super.appendToBaseUrl('/find_bire_sb_variants_by_family_and_variant_codes');

	// public readonly findBireSbsByFamilyAndVariantCodes: string = super.appendToBaseUrl('/find_bire_sbs_by_family_and_variant_codes');

	// public readonly removeBireSbVariantsByFamilyAndVariantCodes: string = super.appendToBaseUrl('/remove_bire_sb_variants_by_family_and_variant_codes');

	// public readonly findBireConfigurationsByItemAndVariantCodes: string = super.appendToBaseUrl('/find_bire_configurations_by_item_and_variant_codes');

	// public readonly findBireConfigurationsByEvolution: string = super.appendToBaseUrl('/find_bire_configurations_by_evolution');

	// public readonly findBirePackBaseOptionsByFamilyAndVariantCodes: string = super.appendToBaseUrl('/find_bire_pack_base_options_by_family_and_variant_codes');

	// public readonly findBireModificationAttributesByItem: string = super.appendToBaseUrl('/find_bire_modification_attributes_by_item');

	// public readonly findBireEvolutionAttributesByEvolution: string = super.appendToBaseUrl('/find_bire_evolution_attributes_by_evolution');

	// public readonly findBireVariantAttributesByVariantVersion: string = super.appendToBaseUrl('/find_bire_variant_attributes_by_variant_version');

	// public readonly findBireConfigurationsByItemVersion: string = super.appendToBaseUrl('/find_bire_configurations_by_item_version');

	// public readonly findBireActionTypesByActionTypeCode: string = super.appendToBaseUrl('/find_bire_action_types_by_action_type_code');

	// public readonly findBireActionTypesByActionTypeName: string = super.appendToBaseUrl('/find_bire_action_types_by_action_type_name');

	// public readonly removeBireEvolutionsByFamilyAndVariantCodes: string = super.appendToBaseUrl('/remove_bire_evolutions_by_family_and_variant_codes');

	// public readonly updateBireEvolutionStatusOfEvolution: string = super.appendToBaseUrl('/update_bire_evolution_status_of_evolution');

	// public readonly findBireEvolutionItemsByEvolution: string = super.appendToBaseUrl('/find_bire_evolution_items_by_evolution');

	// public readonly removeBireEvolutionSbsByEvolution: string = super.appendToBaseUrl('/remove_bire_evolution_sbs_by_evolution');

	// public readonly findBireEvolutionVariantsByEvolutionNumbers: string = super.appendToBaseUrl('/find_bire_evolution_variants_by_evolution_numbers');

	// public readonly findBireAlternativePnsByItemVersionAndPnCode: string = super.appendToBaseUrl('/find_bire_alternative_pns_by_item_version_and_pn_code');

	// public readonly removeBireEvolutionPnsByItemAndPnCode: string = super.appendToBaseUrl('/remove_bire_evolution_pns_by_item_and_pn_code');

	// public readonly findBireItemPnEvolutionsByEvolution: string = super.appendToBaseUrl('/find_bire_item_pn_evolutions_by_evolution');

	// public readonly findBireModificationEvolutionsByEvolution: string = super.appendToBaseUrl('/find_bire_modification_evolutions_by_evolution');

	// public readonly findBireModificationEvolutionsByModification: string = super.appendToBaseUrl('/find_bire_modification_evolutions_by_modification');

	// public readonly findBireVersionMeasuresByFamilyCodeAndStructureTypeAndVariantCodeAndRatingCodesAndCounterCodesAndAtaCodesWithLimits: string = super.appendToBaseUrl('/find_bire_version_measures_by_family_code_and_structure_type_and_variant_code_and_rating_codes_and_counter_codes_and_ata_codes_with_limits');

	// public readonly removeBireModificationVariantsByFamilyAndVariantCodes: string = super.appendToBaseUrl('/remove_bire_modification_variants_by_family_and_variant_codes');

	// public readonly findBireItemsByFamilyAndVariantAndFunctionCodeCodes: string = super.appendToBaseUrl('/find_bire_items_by_family_and_variant_and_function_code_codes');

	// public readonly findBireModificationsByModificationPKAndDesignation: string = super.appendToBaseUrl('/find_bire_modifications_by_modification_pk_and_designation');

	// public readonly findBireVersionMeasuresByItemAndCounterAndPnCodes: string = super.appendToBaseUrl('/find_bire_version_measures_by_item_and_counter_and_pn_codes');

	// public readonly findBireEvolutionItemsByEvolutionAndActionTypeCode: string = super.appendToBaseUrl('/find_bire_evolution_items_by_evolution_and_action_type_code');

	// public readonly findBireModificationsByFamilyAndModificationNumbers: string = super.appendToBaseUrl('/find_bire_modifications_by_family_and_modification_numbers');

	// public readonly findBireEvolutionEvolutionsByFamilyAndVariantCodes: string = super.appendToBaseUrl('/find_bire_evolution_evolutions_by_family_and_variant_codes');

	// public readonly findBireModificationsByEvolutionNumbersAndFamilyCode: string = super.appendToBaseUrl('/find_bire_modifications_by_evolution_numbers_and_family_code');

	// public readonly findBireReportsByFamilyAndVariantCodesAndTCIReportCode: string = super.appendToBaseUrl('/find_bire_reports_by_family_and_variant_codes_and_tci_report_code');

	// public readonly findBireReportsByFamilyAndVariantCodesAndReferencialReportCode: string = super.appendToBaseUrl('/find_bire_reports_by_family_and_variant_codes_and_referencial_report_code');

	// public readonly findBireReportsByFamilyAndVariantCodesAndExperienceReportCode: string = super.appendToBaseUrl('/find_bire_reports_by_family_and_variant_codes_and_experience_report_code');

	// public readonly removeBireVersionPnsByItemVersion: string = super.appendToBaseUrl('/remove_bire_version_pns_by_item_version');

	// public readonly findBireEvolutionsByEvolutionPKAndDesignation: string = super.appendToBaseUrl('/find_bire_evolutions_by_evolution_pk_and_designation');

	// public readonly findBireEvolutionVariantsBySearchCriteria: string = super.appendToBaseUrl('/find_bire_evolution_variants_by_search_criteria');

	// public readonly findBireModificationVariantsBySearchCriteria: string = super.appendToBaseUrl('/find_bire_modification_variants_by_search_criteria');

	// public readonly findBireSbVariantsBySearchCriteria: string = super.appendToBaseUrl('/find_bire_sb_variants_by_search_criteria');

	// public readonly findBireVersionMeasuresByItemVersion: string = super.appendToBaseUrl('/find_bire_version_measures_by_item_version');

	// public readonly findBireVersionMeasuresByFamilyAndVariantCodes: string = super.appendToBaseUrl('/find_bire_version_measures_by_family_and_variant_codes');

	// public readonly findBireEvolutionItemsByActionTypeCode: string = super.appendToBaseUrl('/find_bire_evolution_items_by_action_type_code');

	// public readonly findBireItemItemsByFamilyAndVariantCodes: string = super.appendToBaseUrl('/find_bire_item_items_by_family_and_variant_codes');

	// public readonly findAllBireMaintenanceEnvironments: string = super.appendToBaseUrl('/find_all_bire_maintenance_environments');

	// public readonly findBireUnmountAssemblysByFamilyAndVariantCodes: string = super.appendToBaseUrl('/find_bire_unmount_assemblys_by_family_and_variant_codes');

	// public readonly findBireUnmountOrdersByFamilyAndVariantCodes: string = super.appendToBaseUrl('/find_bire_unmount_orders_by_family_and_variant_codes');

	// public readonly hasAlreadyUnmountAssemblyAnItemHeadOfGroup: string = super.appendToBaseUrl('/has_already_unmount_assembly_an_item_head_of_group');

	// public readonly findBireReportContentOfBireReport: string = super.appendToBaseUrl('/find_bire_report_content_of_bire_report');

	// public readonly getAlternativePNsFromItemAndPnCode: string = super.appendToBaseUrl('/get_alternative_p_ns_from_item_and_pn_code');

	// public readonly duplicateToCustomizedBireVersionPnsByItem: string = super.appendToBaseUrl('/duplicate_to_customized_bire_version_pns_by_item');

	// public readonly duplicateToCustomizedBireItemVersionsByItem: string = super.appendToBaseUrl('/duplicate_to_customized_bire_item_versions_by_item');

	// public readonly findBireEvolutionItemsByFamilyAndVariantCodes: string = super.appendToBaseUrl('/find_bire_evolution_items_by_family_and_variant_codes');

	// public readonly findBireEvolutionPnsByFamilyAndVariantCodes: string = super.appendToBaseUrl('/find_bire_evolution_pns_by_family_and_variant_codes');

	// public readonly removeBireVersionMeasure: string = super.appendToBaseUrl('/remove_bire_version_measure');

	// public readonly findBireMeasureReference: string = super.appendToBaseUrl('/find_bire_measure_reference');

	// public readonly findBireItemItemsByItemFather: string = super.appendToBaseUrl('/find_bire_item_items_by_item_father');

	// public readonly createBireItemMaintenance: string = super.appendToBaseUrl('/create_bire_item_maintenance');

	// public readonly createBireItemAttribute: string = super.appendToBaseUrl('/create_bire_item_attribute');

	// public readonly createBireEvolutionAttribute: string = super.appendToBaseUrl('/create_bire_evolution_attribute');

	// public readonly createBireSbAttribute: string = super.appendToBaseUrl('/create_bire_sb_attribute');

	// public readonly createBireModificationAttribute: string = super.appendToBaseUrl('/create_bire_modification_attribute');

	// public readonly createBireVpAttribute: string = super.appendToBaseUrl('/create_bire_vp_attribute');

	// public readonly createBireVariantAttribute: string = super.appendToBaseUrl('/create_bire_variant_attribute');

	// public readonly createBirePnAttribute: string = super.appendToBaseUrl('/create_bire_pn_attribute');

	// public readonly removeBireItemMaintenance: string = super.appendToBaseUrl('/remove_bire_item_maintenance');

	// public readonly removeBireItemMaintenanceByItem: string = super.appendToBaseUrl('/remove_bire_item_maintenance_by_item');

	// public readonly updateBireItemMaintenance: string = super.appendToBaseUrl('/update_bire_item_maintenance');

	// public readonly findBireItemMaintenancesByItem: string = super.appendToBaseUrl('/find_bire_item_maintenances_by_item');

	// public readonly findAllBireKPourcents: string = super.appendToBaseUrl('/find_all_bire_k_pourcents');

	// public readonly createBireKPourcent: string = super.appendToBaseUrl('/create_bire_k_pourcent');

	// public readonly removeBireKPourcent: string = super.appendToBaseUrl('/remove_bire_k_pourcent');

	// public readonly updateBireKPourcent: string = super.appendToBaseUrl('/update_bire_k_pourcent');

	// public readonly findBireKPourcent: string = super.appendToBaseUrl('/find_bire_k_pourcent');

	// public readonly createBireMaintenanceEnvironment: string = super.appendToBaseUrl('/create_bire_maintenance_environment');

	// public readonly removeBireMaintenanceEnvironment: string = super.appendToBaseUrl('/remove_bire_maintenance_environment');

	// public readonly updateBireMaintenanceEnvironment: string = super.appendToBaseUrl('/update_bire_maintenance_environment');

	// public readonly findBireMaintenanceEnvironment: string = super.appendToBaseUrl('/find_bire_maintenance_environment');

	// public readonly findBireUnmountAssembly: string = super.appendToBaseUrl('/find_bire_unmount_assembly');

	// public readonly findAllIsnAtasAsStrings: string = super.appendToBaseUrl('/find_all_isn_atas_as_strings');

	// public readonly createBireUnmountAssembly: string = super.appendToBaseUrl('/create_bire_unmount_assembly');

	// public readonly createBireUnmountOrder: string = super.appendToBaseUrl('/create_bire_unmount_order');

	// public readonly removeBireUnmountOrder: string = super.appendToBaseUrl('/remove_bire_unmount_order');

	// public readonly removeBireUnmountAssembly: string = super.appendToBaseUrl('/remove_bire_unmount_assembly');

	// public readonly createBireItemSite: string = super.appendToBaseUrl('/create_bire_item_site');

	// public readonly updateBireItemSite: string = super.appendToBaseUrl('/update_bire_item_site');

	// public readonly removeBireItemSite: string = super.appendToBaseUrl('/remove_bire_item_site');

	// public readonly findBireItemSitesByItem: string = super.appendToBaseUrl('/find_bire_item_sites_by_item');

	// public readonly findBireItemVersion: string = super.appendToBaseUrl('/find_bire_item_version');

	// public readonly updateSapClassCodeOfBireItem: string = super.appendToBaseUrl('/update_sap_class_code_of_bire_item');

	// public readonly updateSapClassCodeOfBireItems: string = super.appendToBaseUrl('/update_sap_class_code_of_bire_items');

	// public readonly updateBlobOfBireReport: string = super.appendToBaseUrl('/update_blob_of_bire_report');

	// public readonly findBireReportsByReportCode: string = super.appendToBaseUrl('/find_bire_reports_by_report_code');

	// public readonly findBireItemItemsByItemSon: string = super.appendToBaseUrl('/find_bire_item_items_by_item_son');

	// public readonly findBireDocItemsByItem: string = super.appendToBaseUrl('/find_bire_doc_items_by_item');

	// public readonly findBireDocSbsBySb: string = super.appendToBaseUrl('/find_bire_doc_sbs_by_sb');

	// public readonly createBireDocItem: string = super.appendToBaseUrl('/create_bire_doc_item');

	// public readonly createBireDocument: string = super.appendToBaseUrl('/create_bire_document');

	// public readonly updateBireDocItem: string = super.appendToBaseUrl('/update_bire_doc_item');

	// public readonly updateBireDocument: string = super.appendToBaseUrl('/update_bire_document');

	// public readonly removeBireDocItem: string = super.appendToBaseUrl('/remove_bire_doc_item');

	// public readonly removeBireDocument: string = super.appendToBaseUrl('/remove_bire_document');

	// public readonly findBireAttributesByCategory: string = super.appendToBaseUrl('/find_bire_attributes_by_category');

	// public readonly createBireAttribute: string = super.appendToBaseUrl('/create_bire_attribute');

	// public readonly updateBireAttribute: string = super.appendToBaseUrl('/update_bire_attribute');

	// public readonly removeBireAttribute: string = super.appendToBaseUrl('/remove_bire_attribute');

	// public readonly findBireAttribute: string = super.appendToBaseUrl('/find_bire_attribute');

	// public readonly findDeferredDefectInformation: string = super.appendToBaseUrl('/find_deferred_defect_information');

	// public readonly createBireConcernedAsset: string = super.appendToBaseUrl('/create_bire_concerned_asset');

	// public readonly removeBireConcernedAssetsBySb: string = super.appendToBaseUrl('/remove_bire_concerned_assets_by_sb');

	// public readonly findAllBireConcernedAssets: string = super.appendToBaseUrl('/find_all_bire_concerned_assets');

	// public readonly findBireConcernedAssetsBySb: string = super.appendToBaseUrl('/find_bire_concerned_assets_by_sb');

	// public readonly findBireConcernedAssetsByPNSN: string = super.appendToBaseUrl('/find_bire_concerned_assets_by_pnsn');

	// public readonly findBireItemsByTopItem: string = super.appendToBaseUrl('/find_bire_items_by_top_item');

	// public readonly getEvolutionsListFromEvolution: string = super.appendToBaseUrl('/get_evolutions_list_from_evolution');

	// public readonly findBireItemPnEvolutionsByFamilyAndVariantCodes: string = super.appendToBaseUrl('/find_bire_item_pn_evolutions_by_family_and_variant_codes');

	// public readonly findBireTilItemsByFamilyAndVariantCodes: string = super.appendToBaseUrl('/find_bire_til_items_by_family_and_variant_codes');

	// public readonly findBireVersionPnsByFamilyAndVariantAndPnCodes: string = super.appendToBaseUrl('/find_bire_version_pns_by_family_and_variant_and_pn_codes');

	// public readonly findBireVersionPnsByItemAndPnCode: string = super.appendToBaseUrl('/find_bire_version_pns_by_item_and_pn_code');

	// public readonly updateBireDocumentNameAndDateAndDescription: string = super.appendToBaseUrl('/update_bire_document_name_and_date_and_description');

	// public readonly findBireEvolutionsByEvolutionCriteria: string = super.appendToBaseUrl('/find_bire_evolutions_by_evolution_criteria');

	// public readonly findBireEvolutionsByEvolutionCriteria: string = super.appendToBaseUrl('/find_bire_evolutions_by_evolution_criteria');

	// public readonly getItemRangesMapByFamilyVariantKey: string = super.appendToBaseUrl('/get_item_ranges_map_by_family_variant_key');

	// public readonly removeBireConcernedAssetsByEvolution: string = super.appendToBaseUrl('/remove_bire_concerned_assets_by_evolution');

	// public readonly removeBireConcernedAssetsByModification: string = super.appendToBaseUrl('/remove_bire_concerned_assets_by_modification');

	// public readonly findBireConcernedAssetsByEvolution: string = super.appendToBaseUrl('/find_bire_concerned_assets_by_evolution');

	// public readonly findBireConcernedAssetsByModification: string = super.appendToBaseUrl('/find_bire_concerned_assets_by_modification');

	// public readonly findBireMeasureReferencesBySearchCriteria: string = super.appendToBaseUrl('/find_bire_measure_references_by_search_criteria');


	public constructor() {
		super(ProductStructureManagementApi.baseUrl);
	}

}