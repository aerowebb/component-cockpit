export interface BidtTrainingDTO {
  bidtEmployeeId?: number;
  trainingStartDate?: string;
  trainingEndDate?: string;
  trainingName?: string;
  trainingPerformed?: number;
  trainingAskedBy?: string;
  trainingInstructor?: string;
  trainingCenter?: string;
  trainingComment?: string;
  statusState?: string;
  statusUser?: string;
  statusDate?: Date;
}
