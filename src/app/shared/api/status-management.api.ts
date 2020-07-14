import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class StatusManagementApi extends AbstractApi {
  private static readonly baseUrl: string = '/status_management';

  // public readonly updateStatusItem: string = super.appendToBaseUrl('/update_status_item');

  // public readonly updateStatusPn: string = super.appendToBaseUrl('/update_status_pn');

  // public readonly updateStatusSb: string = super.appendToBaseUrl('/update_status_sb');

  // public readonly updateStatusTask: string = super.appendToBaseUrl('/update_status_task');

  // public readonly updateStatusEvolution: string = super.appendToBaseUrl('/update_status_evolution');

  // public readonly updateStatusEvolutionEvolution: string = super.appendToBaseUrl('/update_status_evolution_evolution');

  // public readonly updateStatusEvolutionItem: string = super.appendToBaseUrl('/update_status_evolution_item');

  // public readonly updateStatusEvolutionPn: string = super.appendToBaseUrl('/update_status_evolution_pn');

  // public readonly updateStatusEvolutionSb: string = super.appendToBaseUrl('/update_status_evolution_sb');

  // public readonly updateStatusEvolutionVariant: string = super.appendToBaseUrl('/update_status_evolution_variant');

  // public readonly updateStatusAlternativePn: string = super.appendToBaseUrl('/update_status_alternative_pn');

  // public readonly updateStatusItemItem: string = super.appendToBaseUrl('/update_status_item_item');

  // public readonly updateStatusItemPnEvolution: string = super.appendToBaseUrl('/update_status_item_pn_evolution');

  // public readonly updateStatusConfiguration: string = super.appendToBaseUrl('/update_status_configuration');

  // public readonly updateStatusConfigurationPack: string = super.appendToBaseUrl('/update_status_configuration_pack');

  // public readonly updateStatusItemVersion: string = super.appendToBaseUrl('/update_status_item_version');

  // public readonly updateStatusModification: string = super.appendToBaseUrl('/update_status_modification');

  // public readonly updateStatusModificationVariant: string = super.appendToBaseUrl('/update_status_modification_variant');

  // public readonly updateStatusPackEvolution: string = super.appendToBaseUrl('/update_status_pack_evolution');

  // public readonly updateStatusPackBaseOption: string = super.appendToBaseUrl('/update_status_pack_base_option');

  // public readonly updateStatusSbVariant: string = super.appendToBaseUrl('/update_status_sb_variant');

  // public readonly updateStatusVariantVersion: string = super.appendToBaseUrl('/update_status_variant_version');

  // public readonly updateStatusVersionPn: string = super.appendToBaseUrl('/update_status_version_pn');

  // public readonly updateStatusInventory: string = super.appendToBaseUrl('/update_status_inventory');

  // public readonly updateStatusDecision: string = super.appendToBaseUrl('/update_status_decision');

  // public readonly updateStatusWorkOrder: string = super.appendToBaseUrl('/update_status_work_order');

  public readonly updateStatusGlobal: string = super.appendToBaseUrl('/update_status_global');

  // public readonly updateStatusModificationEvolution: string = super.appendToBaseUrl('/update_status_modification_evolution');

  public constructor() {
    super(StatusManagementApi.baseUrl);
  }
}
