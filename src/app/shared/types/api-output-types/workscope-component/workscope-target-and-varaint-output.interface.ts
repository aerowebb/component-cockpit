import { BireConfigurationDTO } from '../../api-types/bire-configuration-dto.interface';
import { LabelValue } from '../../label-value.interface';

import { ConfTableOutput } from './conf-table-output.interface';
import { ConfigurationsEvolutionOutput } from './configurations-evolution-output.interface';
import { ItemConfigurationOutput } from './item-configuration-output.interface';

export interface WorkscopeTargetAndVariantOutput {
  targetNumberList?: LabelValue<string>[];
  variantNameList?: LabelValue<string>[];
  configurationEvolutionDTOList?: ConfigurationsEvolutionOutput[];
  itemConfigurationOutputList?: ItemConfigurationOutput[];
  configurationReportList?: ConfTableOutput[];
  iwbTargetConfiguration?: BireConfigurationDTO[];
}
