import { Injectable } from '@angular/core';
import { AbstractApi } from 'app/api/abstract.api';

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

	// public readonly findHistoricOfObjectByPk: string = super.appendToBaseUrl('/find_historic_of_object_by_pk');

	// public readonly removeHistoryEntity: string = super.appendToBaseUrl('/remove_history_entity');


	public constructor() {
		super(ProductStructureHistoryApi.baseUrl);
	}

}