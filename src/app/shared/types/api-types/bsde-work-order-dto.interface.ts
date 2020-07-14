export interface BsdeWorkOrderDTO {
  workOrderId?: string;
  projectId?: string;
  sapWorkOrderNumber?: string;
  sapWorkOrderType?: string;
  sapPlantCode?: string;
  workOrderName?: string;
  workOrderDescription?: string;
  workstation?: string;
  woFamilyCode?: string;
  woVariantCode?: string;
  woChapter?: string;
  woSection?: string;
  woSubject?: string;
  woSheet?: string;
  woMarks?: string;
  woInvPn?: string;
  woInvSn?: string;
  woInvQty?: string;
  woInvSentence?: string;
  woTargetPn?: string;
  pnReworked?: string;
  lockUser?: string;
  lockSession?: string;
  sapSendDate?: Date;
  statusState?: string;
  statusUser?: string;
  statusDate?: Date;
}
