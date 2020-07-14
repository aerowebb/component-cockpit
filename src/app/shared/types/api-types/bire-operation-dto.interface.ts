import { BireQualificationDTO } from './bire-qualification-dto.interface';

export interface BireOperationDTO {
  rangeCode?: string;
  technicalLevel?: number;
  opeCode?: string;
  opeVersion?: string;
  opeChapter?: string;
  opeSection?: string;
  opeSubject?: string;
  opeSheet?: string;
  opeMarks?: string;
  opeDescription?: string;
  opeDesignation?: string;
  opeSequenceNumber?: number;
  opeCost?: number;
  opeDurationTime?: number;
  opeWorkcenter?: string;
  opeQualification?: string;
  opeManHour?: number;
  opeCurrency?: string;
  statusState?: string;
  statusUser?: string;
  statusDate?: Date;
  bireQualificationData?: BireQualificationDTO;
  ope?: string;
}
