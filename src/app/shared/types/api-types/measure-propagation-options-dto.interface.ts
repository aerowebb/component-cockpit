export interface MeasurePropagationOptionsDTO {
  allowInsertionBeforeExistingValue?: boolean;
  allowMeasureReadingSmallerThanPrevious?: boolean;
  allowMeasureReadingGreatherThanPreviousPlusXValue?: boolean;
  excludeEngineForPropagation?: boolean;
  doNotCheckMeasuringPointExistence?: boolean;
  createEvent?: boolean;
  simulation?: boolean;
  measureComment?: string;
  measureSource?: string;
}
