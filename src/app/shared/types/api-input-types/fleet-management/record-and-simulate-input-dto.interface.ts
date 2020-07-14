import { MeasureToRecordTableOutput } from '../../api-output-types/fleet-management/measure-to-record-table-output-dto.interface';
import { BidoMissionEquipmentDTO } from '../../api-types/bido-mission-equipment-dto.interface';

export interface RecordAndSimulateInput {
  bidoMissionEquipmentDTO?: BidoMissionEquipmentDTO;
  measureToRecordList?: MeasureToRecordTableOutput [];
  readingDate?: Date;
  allowMeasureInsertionBeforeExistingValue?: boolean;
  allowMeasureReadingGreaterThanPreviousMonth?: boolean;
  forceReading?: boolean;
  allowMeasureReadingEqualsOrSmallerThanPrevious?: boolean;
}
