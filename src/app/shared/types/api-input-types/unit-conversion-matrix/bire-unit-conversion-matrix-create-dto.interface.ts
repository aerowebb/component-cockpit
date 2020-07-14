import { BireConversionMatrixDTO } from '../../api-output-types/unit-conversion-matrix/bire-unit-conversion-matrix-dto.interface';
import { BireConversionMatrixValueDTO } from '../../api-output-types/unit-conversion-matrix/bire-unit-conversion-matrix-value-dto.interface';
import { BireCmVariantDTO } from '../../api-output-types/unit-conversion-matrix/bire-unit-conversion-matrix-variant-dto.interface';

export interface SaveBireConversionMatrixInputDTO {
  bireConversionMatrixDTO?: BireConversionMatrixDTO;
  bireConversionMatrixValueDTOs?: BireConversionMatrixValueDTO[];
  bireCmVariantDTOs?: BireCmVariantDTO[];
}
