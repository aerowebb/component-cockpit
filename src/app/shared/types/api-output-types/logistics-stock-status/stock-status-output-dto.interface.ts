export interface StockStatusOutputDto {
  stockTitle?: string;
  quOpen?: number;
  quBlocked?: number;
  quControlled?: number;
  quTotal?: number;
  lowThreshold?: number;
  highThreshold?: number;
  label?: string;
}
