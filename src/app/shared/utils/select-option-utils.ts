import { LabelValue } from '../types/label-value.interface';

export class SelectOptionUtils {
  public static sort<T>(option1: LabelValue<T>, option2: LabelValue<T>): number {
    return option1.label.localeCompare(option2.label);
  }
}
