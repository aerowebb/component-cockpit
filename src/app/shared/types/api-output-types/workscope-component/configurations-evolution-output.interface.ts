import { IWBMinimalEvolution } from './iwb-minimal-evolution.interface';

export interface ConfigurationsEvolutionOutput {
  evolutionNumber?: string;
  evolutionRevisionNumber?: string;
  evolutionDesignation?: string;
  category?: string;
  compliance?: string;
  mod?: string;
  ad?: string;
  sb?: string;
  items?: string;
  iwbMinimalEvolution?: IWBMinimalEvolution;
}
