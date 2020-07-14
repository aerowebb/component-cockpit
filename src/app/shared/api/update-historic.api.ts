import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class UpdateHistoricApi extends AbstractApi {
  private static readonly baseUrl: string = '/product_structure_history';

  public readonly findBireSbHistoric: string = super.appendToBaseUrl('/find_bire_sb_historic');

  public readonly findBireEvolutionHistoric: string = super.appendToBaseUrl('/find_bire_evolution_historic');

  public readonly findBireModificationHistoric: string = super.appendToBaseUrl('/find_bire_modification_historic');

  public readonly removeBireModificationHistory: string = super.appendToBaseUrl('/remove_bire_modification_history');

  public readonly removeBireSbHistory: string = super.appendToBaseUrl('/remove_bire_sb_history');

  public readonly removeBireEvolutionHistory: string = super.appendToBaseUrl('/remove_bire_evolution_history');

  public readonly findBirePnHistoric: string = super.appendToBaseUrl('/find_bire_pn_historic');

  public readonly findBireOperationHistoric: string = super.appendToBaseUrl('/find_bire_operation_historic');

  public readonly removeBireOperationHistory: string = super.appendToBaseUrl('/remove_h_bire_operation_historic ');

  public readonly removeBireVariantVersionHistory: string = super.appendToBaseUrl(
    '/remove_bire_variant_version_history'
  );

  public constructor() {
    super(UpdateHistoricApi.baseUrl);
  }
}
