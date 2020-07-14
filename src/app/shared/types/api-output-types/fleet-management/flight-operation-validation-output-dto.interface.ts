import { MeasureToRecordTableOutput } from './measure-to-record-table-output-dto.interface';

export interface FlightOperationValidationOutput {
  msn?: string;
  familyVariant?: string;
  tsn?: string;
  csn?: string;
  eisDate?: string;
  assetRegistration?: string;
  chronoNumber?: string;
  flightCustomer?: string;
  status?: string;
  occurence?: string;
  date?: Date;
  endDate?: Date;
  duration?: string;
  type?: string;
  measureToRecordTableOutput?: MeasureToRecordTableOutput[];
}
