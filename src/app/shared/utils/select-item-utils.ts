import { SelectItem } from 'primeng/api';

import { KeyValue } from '../../shared/types/key-value.interface';
import { LabelValue } from '../../shared/types/label-value.interface';

export class SelectItemUtils {
  public static fromKeyValue<T>(obj: KeyValue<T>): SelectItem {
    return {
      label: obj.key,
      value: obj.value
    };
  }

  public static fromKeyValues<T>(list: KeyValue<T>[]): SelectItem[] {
    return list.map(this.fromKeyValue);
  }

  public static fromValues(list: string[]): SelectItem[] {
    return list.map((item) => {
      return {
        label: item,
        value: item
      };
    });
  }

  public static fromLabelValue<T>(obj: LabelValue<T>): SelectItem {
    return {
      label: obj.label,
      value: obj.value
    };
  }

  public static fromLabelValues<T>(list: LabelValue<T>[]): SelectItem[] {
    return list.map(this.fromLabelValue);
  }

  public static formatSelectItem(key: string | undefined, selectItems: SelectItem[]): string {
    let selectItemFormatted = '';
    if (!!key) {
      const selectedItem = selectItems.find((selectItem) => selectItem.value === key);
      selectItemFormatted = !!selectedItem && !!selectedItem.label ? selectedItem.label : '';
    }

    return selectItemFormatted;
  }
  public static formatNumberSelectItem(key: number | undefined, selectItems: SelectItem[]): string {
    let selectItemFormatted = '';
    if (!!key) {
      const selectedItem = selectItems.find((selectItem) => selectItem.value === key);
      selectItemFormatted = !!selectedItem && !!selectedItem.label ? selectedItem.label : '';
    }

    return selectItemFormatted;
  }

  public static labelSorter(a: SelectItem, b: SelectItem): number {
    if (a && b && a.label && b.label) {
      if (a.label < b.label) {
        return -1;
      }
      if (a.label > b.label) {
        return 1;
      }
    }

    return 0;
  }
}
