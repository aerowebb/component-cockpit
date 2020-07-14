import { LabelValue } from '../../../../shared/types/label-value.interface';

export interface CatalogNameInterface {
  isProperty: boolean;
  catalogList: LabelValue<string>;
  catalogArea: string;
  // tslint:disable-next-line:no-any
  component?: any;
  componentName?: string;
  isCreateEnabled?: boolean;
  isImportEnabled?: boolean;
  accessRightName?: string;
  key?: string;
}
