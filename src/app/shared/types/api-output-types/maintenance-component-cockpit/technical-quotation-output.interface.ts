import { SentenceAndDecisionListOutput } from './sentence-and-decision-list-output.interface';

export interface TechnicalQuotationOutput {
  pn?: string;
  sn?: string;
  sentenceValue?: string;
  decisionValue?: string;
  targetPn?: string;
  quantity?: string;
  woCode?: string;
  woId?: string;
  woProjectId?: string;
  targetResultMatchingIcon?: string;
  targetResultMatchingAlt?: string;
  iwbFindingsToDisplay: unknown[];
  iwbTask: unknown[];
  woProgress?: number;
  issueWareHouse?: string;
  receiptWareHouse?: string;
  decision?: string;
  sentenceAndDecisionList?: SentenceAndDecisionListOutput[];
}
