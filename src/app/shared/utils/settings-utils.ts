import { LabelValue } from '../types/label-value.interface';

import { StringUtils } from './string-utils';

export class SettingsUtils {
  public static isPropertyEnabled(settings: LabelValue<string>[], propertyInput: string): boolean {
    const selectedProperty = settings.find((property) => property.value === propertyInput);

    return (
      !!selectedProperty &&
      !StringUtils.isNullOrEmpty(selectedProperty.label) &&
      (selectedProperty.label.trim().toUpperCase() === 'X' ||
        selectedProperty.label === '1' ||
        selectedProperty.label.trim().toUpperCase() === 'TRUE')
    );
  }
}
