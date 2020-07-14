import { LabelValue } from '../../../shared/types/label-value.interface';

export class LabelValueHelper {
  public static getLabelValueByValue<T>(references: LabelValue<T>[], value: T): LabelValue<T> | undefined {
    return references && references.find((lv) => lv.value === value);
  }

  public static getLabelByValue<T>(references: LabelValue<T>[], value: T): string | undefined {
    const labelValue = LabelValueHelper.getLabelValueByValue(references, value);

    return labelValue ? labelValue.label : undefined;
  }
}
