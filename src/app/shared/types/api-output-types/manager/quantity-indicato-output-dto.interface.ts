import { IndicatorsOutputDTO } from './indicators-output-dto.interface';

export interface QuantityIndicatorOutputDTO extends IndicatorsOutputDTO {
  availableQuantity: number;
}
