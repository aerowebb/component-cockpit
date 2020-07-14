export interface SentenceAndDecisionListOutput {
  sentence?: string;
  decision?: string;
  pn?: string;
  quantity?: string;
  decisionList?: string[];
  sentenceList?: string[];
  favoriteCombination?: SentenceAndDecisionListOutput;
  sentenceDecisionList?: SentenceAndDecisionListOutput[];
}
