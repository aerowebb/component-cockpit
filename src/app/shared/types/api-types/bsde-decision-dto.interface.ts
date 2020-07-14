export interface BsdeDecisionDTO {
  decId?: string;
  projectId?: string;
  decFamilyCode?: string;
  decVariantCode?: string;
  decChapter?: string;
  decSection?: string;
  decSubject?: string;
  decSheet?: string;
  decMarks?: string;
  decTargetPn?: string;
  decision?: string;
  repairCenterCode?: string;
  storeCode?: string;
  decInvPn?: string;
  decInvSn?: string;
  decInvQty?: string;
  decInvSentence?: string;
  lockUser?: string;
  lockSession?: string;
  decCsssmFather?: string;
  decReason?: string;
  sapSendDate?: Date;
  statusState?: string;
  statusUser?: string;
  statusDate?: Date;
}
