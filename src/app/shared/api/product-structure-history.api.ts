import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class ProductStructureHistoryApi extends AbstractApi {
  private static readonly baseUrl: string = '/product_structure_history';

  // public readonly removeHistoryObjectData: string = super.appendToBaseUrl('/remove_history_object_data');

  // public readonly findHBireEvolutionAttributes: string = super.appendToBaseUrl('/find_h_bire_evolution_attributes');

  // public readonly findHBireItemAttributes: string = super.appendToBaseUrl('/find_h_bire_item_attributes');

  // public readonly findHBireModificationAttributes: string = super.appendToBaseUrl('/find_h_bire_modification_attributes');

  // public readonly findHBirePnAttributes: string = super.appendToBaseUrl('/find_h_bire_pn_attributes');

  // public readonly findHBireSbAttributes: string = super.appendToBaseUrl('/find_h_bire_sb_attributes');

  // public readonly findHBireVpAttributes: string = super.appendToBaseUrl('/find_h_bire_vp_attributes');

  // public readonly findHBireVariantAttributes: string = super.appendToBaseUrl('/find_h_bire_variant_attributes');

  public readonly findHistoricOfObjectByPk: string = super.appendToBaseUrl('/find_historic_of_object_by_pk');

  // public readonly removeHistoryEntity: string = super.appendToBaseUrl('/remove_history_entity');

  public readonly removeHfObjectByPk: string = super.appendToBaseUrl('/remove_hf_object_by_pk');

  public readonly findHBireEvolutionAttributesByAttributeId: string = super.appendToBaseUrl(
    '/find_h_bire_evolution_attributes_by_atribute_id'
  );

  public readonly findHBireItemAttributes: string = super.appendToBaseUrl(
    '/find_h_bire_item_attributes_by_atribute_id'
  );

  public readonly findHBireModificationAttributesByAttributeId: string = super.appendToBaseUrl(
    '/find_h_bire_modification_attributes_by_atribute_id'
  );

  public readonly findHBirePnAttributesByAttributeId: string = super.appendToBaseUrl(
    '/find_h_bire_pn_attributes_by_atribute_id'
  );

  public readonly findHBireSbAttributesByAttributeId: string = super.appendToBaseUrl(
    '/find_h_bire_sb_attributes_by_atribute_id'
  );

  public readonly findHBireVariantAttributesByAttributeId: string = super.appendToBaseUrl(
    '/find_h_bire_variant_attributes_by_atribute_id'
  );

  public readonly findHBireVpAttributesByAttributeId: string = super.appendToBaseUrl(
    '/find_h_bire_vp_attributes_by_atribute_id'
  );

  public readonly removeHBireEvolutionAttribute: string = super.appendToBaseUrl('/remove_h_bire_evolution_attribute');

  public readonly removeHBireItemAttribute: string = super.appendToBaseUrl('/remove_h_bire_item_attribute');

  public readonly removeHBireModificationAttribute: string = super.appendToBaseUrl(
    '/remove_h_bire_modification_attribute'
  );

  public readonly removeHBirePnAttribute: string = super.appendToBaseUrl('/remove_h_bire_pn_attribute');

  public readonly removeHBireSbAttribute: string = super.appendToBaseUrl('/remove_h_bire_sb_attribute');

  public readonly removeHBireVariantAttribute: string = super.appendToBaseUrl('/remove_h_bire_variant_attribute');

  public readonly removeHBireVpAttribute: string = super.appendToBaseUrl('/remove_h_bire_vp_attribute');

  public readonly findBireVariantVersionHistoric: string = super.appendToBaseUrl('/find_bire_variant_version_historic');

  public constructor() {
    super(ProductStructureHistoryApi.baseUrl);
  }
}
