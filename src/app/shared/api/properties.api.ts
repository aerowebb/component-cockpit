import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class PropertiesApi extends AbstractApi {
  private static readonly baseUrl: string = '/properties';

  public readonly countries: string = super.appendToBaseUrl('/countries');

  public readonly generic: string = super.appendToBaseUrl('/generic');

  public readonly getConfigurationValueByKey: string = super.appendToBaseUrl('/get_configuration_value_by_key');

  public readonly getDefaultTimeZoneCode: string = super.appendToBaseUrl('/get_default_time_zone_code');

  public readonly getEventStatusValueByKey: string = super.appendToBaseUrl('/get_event_status_value_by_key');

  public readonly getObjectStatusList: string = super.appendToBaseUrl('/get_object_status_list');

  public readonly getObjectStatusAllList: string = super.appendToBaseUrl('/get_all_status_list');

  public readonly timezones: string = super.appendToBaseUrl('/time_zones');

  public readonly zones: string = super.appendToBaseUrl('/zones');

  public readonly getObjectStatusLabel: string = super.appendToBaseUrl('/get_object_status_label');

  public readonly getFamilyFunctionMap: string = super.appendToBaseUrl('/get_family_function_map');

  public readonly getFuncObjectStatusValueByKey: string = super.appendToBaseUrl('/get_func_object_status_value_by_key');

  public readonly getFullPackageTypeMap: string = super.appendToBaseUrl('/full_package_type_map');

  public constructor() {
    super(PropertiesApi.baseUrl);
  }
}
