import { ConditionTagInput } from './condition-tag-input.interface';

export interface RuleCommentInput {
  conditionTagList?: ConditionTagInput[];
  mainComment?: string;
}
