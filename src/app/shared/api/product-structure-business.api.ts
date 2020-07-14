import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class ProductStructureBusinessApi extends AbstractApi {
  private static readonly baseUrl: string = '/product_structure_business';

  // public readonly checkConfigurationItem: string = super.appendToBaseUrl('/check_configuration_item');

  // public readonly controlUsedWith: string = super.appendToBaseUrl('/control_used_with');

  public readonly getApplicableSbs: string = super.appendToBaseUrl('/get_applicable_sbs');

  public readonly getApplicableAds: string = super.appendToBaseUrl('/get_applicable_ads');

  public readonly checkIpcData: string = super.appendToBaseUrl('/check_ipc_data');

  // public readonly checkIfAssetIsConcernedBySBADEVOMOD: string = super.appendToBaseUrl('/check_if_asset_is_concerned_by_sbadevomod');

  // public readonly isBireEvolutionEligibleToConfiguration: string = super.appendToBaseUrl('/is_bire_evolution_eligible_to_configuration');

  // public readonly getMinAndMaxQuantityOfVersionPnList: string = super.appendToBaseUrl('/get_min_and_max_quantity_of_version_pn_list');

  // public readonly checkReferentialDataCompatibility: string = super.appendToBaseUrl('/check_referential_data_compatibility');

  // public readonly getBireItemDataCompatibleWithCriteria: string = super.appendToBaseUrl('/get_bire_item_data_compatible_with_criteria');

  // public readonly aggregateEvolutionImpactsOnBireItemData: string = super.appendToBaseUrl('/aggregate_evolution_impacts_on_bire_item_data');

  public readonly getRecursivelyAssociatedBireEvolutionsToItemAndPnCode: string = super.appendToBaseUrl(
    '/get_recursively_associated_bire_evolutions_to_item_and_pn_code'
  );

  // public readonly findBireItemsByFamilyAndVariantCodesWithRemovalStatistics: string = super.appendToBaseUrl('/find_bire_items_by_family_and_variant_codes_with_removal_statistics');

  // public readonly getEvolutionDetailData: string = super.appendToBaseUrl('/get_evolution_detail_data');

  // public readonly getEvolutionDetailData: string = super.appendToBaseUrl('/get_evolution_detail_data');

  // public readonly findComplexItemStructureByItem: string = super.appendToBaseUrl('/find_complex_item_structure_by_item');

  // public readonly findComplexItemStructureByPn: string = super.appendToBaseUrl('/find_complex_item_structure_by_pn');

  public readonly generateConfigurationList: string = super.appendToBaseUrl('/generate_configuration_list');

  // public readonly controlConfigurationItem: string = super.appendToBaseUrl('/control_configuration_item');

  // public readonly controlConfigurationInventory: string = super.appendToBaseUrl('/control_configuration_inventory');

  // public readonly checkConfigurationInventory: string = super.appendToBaseUrl('/check_configuration_inventory');

  // public readonly filterVersionPnsByLogbookSBs: string = super.appendToBaseUrl('/filter_version_pns_by_logbook_s_bs');

  // public readonly snsGetVersionPnFilteredList: string = super.appendToBaseUrl('/sns_get_version_pn_filtered_list');

  public readonly isFollowedInRating: string = super.appendToBaseUrl('/is_followed_in_rating');

  public readonly getApplicableModifications: string = super.appendToBaseUrl('/get_applicable_modifications');

  public readonly isConfigurationTracked: string = super.appendToBaseUrl('/is_configuration_tracked');

  // public readonly getReferentialContext: string = super.appendToBaseUrl('/get_referential_context');

  // public readonly duplicateBireItemVersion: string = super.appendToBaseUrl('/duplicate_bire_item_version');

  // public readonly duplicateBireVersionPn: string = super.appendToBaseUrl('/duplicate_bire_version_pn');

  // public readonly getSuperiorItemNotes: string = super.appendToBaseUrl('/get_superior_item_notes');

  // public readonly isPartnerOwnerOfEvolution: string = super.appendToBaseUrl('/is_partner_owner_of_evolution');

  // public readonly isItemImpactedByEvolution: string = super.appendToBaseUrl('/is_item_impacted_by_evolution');

  // public readonly getMeasureReferenceMap: string = super.appendToBaseUrl('/get_measure_reference_map');

  // public readonly getBireEvolutionImpacts: string = super.appendToBaseUrl('/get_bire_evolution_impacts');

  // public readonly calculateEvolutionImpactsOnBireItemData: string = super.appendToBaseUrl('/calculate_evolution_impacts_on_bire_item_data');

  // public readonly findComplexItemStructureByFamilyAndVariantCodes: string = super.appendToBaseUrl('/find_complex_item_structure_by_family_and_variant_codes');

  // public readonly calculateEvolutionInterdependenceProblems: string = super.appendToBaseUrl('/calculate_evolution_interdependence_problems');

  // public readonly getEvolutionDataListFromConfiguration: string = super.appendToBaseUrl('/get_evolution_data_list_from_configuration');

  // public readonly getEvolutionDataListFromTargetConf: string = super.appendToBaseUrl('/get_evolution_data_list_from_target_conf');

  // public readonly verifyEvolutionInterdependenceForConfiguration: string = super.appendToBaseUrl('/verify_evolution_interdependence_for_configuration');

  // public readonly verifyEvolutionInterdependenceForTargetConf: string = super.appendToBaseUrl('/verify_evolution_interdependence_for_target_conf');

  // public readonly getBireEvolutionDataMapsFromItemAndPnCode: string = super.appendToBaseUrl('/get_bire_evolution_data_maps_from_item_and_pn_code');

  // public readonly getBireEvolutionDataAfterMapFromItemAndPnCode: string = super.appendToBaseUrl('/get_bire_evolution_data_after_map_from_item_and_pn_code');

  public readonly findAllBireItemByCriteria: string = super.appendToBaseUrl('/find_all_bire_item_by_criteria');

  public readonly getItemStructureForTree: string = super.appendToBaseUrl('/get_item_structure_for_tree');

  public readonly verifyEvolutionInterdependenceForConfiguration: string = super.appendToBaseUrl(
    '/verify_evolution_interdependence_for_configuration'
  );

  public readonly getADCompliance: string = super.appendToBaseUrl('/get_ad_compliance');

  public constructor() {
    super(ProductStructureBusinessApi.baseUrl);
  }
}
