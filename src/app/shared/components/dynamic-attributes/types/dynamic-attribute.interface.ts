import { SelectItem } from 'primeng/api';

import { DynamicAttributeType } from '../enums/dynamic-attribute-type.enum';

export interface DynamicAttribute {
  id: string;
  label: string;
  type: DynamicAttributeType;
  value?: boolean | Date | string;
  listOptions?: SelectItem[];
}
