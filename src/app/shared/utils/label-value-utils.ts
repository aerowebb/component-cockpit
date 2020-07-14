import { LabelValue } from '../../shared/types/label-value.interface';

export class LabelValueUtils {
  /*
   * DEPRECATED: do not use; create an interface instead
   */
  public static stringValueToLabel<T>(object: T, propertyName: string, propertyList: LabelValue<string>[]): boolean {
    if (!!object[propertyName]) {
      const labelValue = propertyList.find((property) => property.value === object[propertyName]);
      if (!!labelValue) {
        object[propertyName] = labelValue.label;

        return true;
      }
    }

    return false;
  }

  /*
   * DEPRECATED: do not use; create an interface instead
   */
  public static labelToStringValue<T>(object: T, propertyName: string, propertyList: LabelValue<string>[]): boolean {
    if (!!object[propertyName]) {
      const labelValue = propertyList.find((property) => property.label === object[propertyName]);
      if (!!labelValue) {
        object[propertyName] = labelValue.value;

        return true;
      }
    }

    return false;
  }
}
