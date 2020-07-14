import { DynamicAttribute } from './dynamic-attribute.interface';

export interface DynamicAttributes {
  label: string;
  attributes: DynamicAttribute[];
  children: DynamicAttributes[];
}
