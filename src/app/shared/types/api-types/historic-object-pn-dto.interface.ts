import { HistoricObjectDto } from './historic-object-dto.interface';

export interface HistoricObjectPnDTO extends HistoricObjectDto {
  manufacturerNatoCode: string;
  otanPnReference?: string;
  fromReparationSolution?: boolean;
  isPma?: boolean;
  traceability?: string;
  quantityUnit?: string;
  articleDesignation?: string;
  pnCode1?: string;
  pnCode2?: string;
  pnCode3?: string;
  pnCode4?: string;
  pnCode5?: string;
  pnCode6?: string;
  manufacturerOtanCode1?: string;
  manufacturerOtanCode2?: string;
  manufacturerOtanCode3?: string;
  manufacturerOtanCode4?: string;
  manufacturerOtanCode5?: string;
  manufacturerOtanCode6?: string;
}
