import { BireConversionMatrixValueDTO } from './bire-unit-conversion-matrix-value-dto.interface';
import { BireCmVariantDTO } from './bire-unit-conversion-matrix-variant-dto.interface';

export interface BireConversionMatrixDTO {
  mandant?: string;
  cmId?: number;
  cmCode?: string;
  cmName?: string;
  values?: BireConversionMatrixValueDTO[];
  variants?: BireCmVariantDTO[];
}
