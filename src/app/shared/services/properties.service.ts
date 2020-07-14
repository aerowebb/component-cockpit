import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { PropertiesApi } from '../../shared/api/properties.api';
import { GenericPropertyConstants } from '../../shared/constants/generic-property-constants';
import { AbstractAwHttpService } from '../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../shared/services/app-config.service';
import { GetObjectStatusListInput } from '../../shared/types/api-input-types/properties/get-object-status-list-input.interface';
import { LabelValue } from '../../shared/types/label-value.interface';
import { ServerUtils } from '../../shared/utils/server-utils';
import { StringUtils } from '../../shared/utils/string-utils';
import { BidtPackageTypeDTO } from '../types/api-types/bidt-package-type-dto.interface';

@Injectable()
export class PropertiesService extends AbstractAwHttpService {
  private readonly cache: Map<string, LabelValue<string>[]>;

  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly propertiesApi: PropertiesApi
  ) {
    super(http, appConfigService);

    this.cache = new Map<string, LabelValue<string>[]>();
  }

  public getConfigurationValue(key: string): Observable<string> {
    return super.post<string, string>(this.propertiesApi.getConfigurationValueByKey, key);
  }

  public getEventStatusValue(key: string): Observable<string> {
    return super.post<string, string>(this.propertiesApi.getEventStatusValueByKey, key);
  }

  public getCountries(): Observable<LabelValue<string>[]> {
    return this.getFromCache(this.propertiesApi.countries, 'countries');
  }

  public getCountriesInZone(selectedZoneCode: string | undefined): Observable<LabelValue<string>[]> {
    if (StringUtils.isNullOrEmpty(selectedZoneCode)) {
      return this.getCountries();
    } else {
      return this.getValue(GenericPropertyConstants.COUNTRY_ZONE_MAP).pipe(
        map((results) => {
          const selectedZone = results.find((result) => result.value === selectedZoneCode);
          const selectedZoneName = !!selectedZone
            ? selectedZone.label.substring((selectedZone.label.indexOf(';') as number) + 1)
            : '';

          return results
            .filter((result) => {
              return result.label.substring((result.label.indexOf(';') as number) + 1) === selectedZoneName;
            })
            .map((result) => {
              const formattedCountry = { ...result };
              formattedCountry.label = formattedCountry.label.substring(0, formattedCountry.label.indexOf(';'));

              return formattedCountry;
            });
        })
      );
    }
  }

  public getDefaultTimeZoneCode(): Observable<string> {
    return super.post<void, string>(this.propertiesApi.getDefaultTimeZoneCode);
  }

  public getObjectStatusList(
    isObjectTypeOfBireSbDTO: boolean,
    isObjectTypeOfBireEvolutionDTO: boolean,
    isObjectTypeOfBireMaintenancePlanDTO: boolean,
    objectStatus: string | undefined,
    isSapSession: boolean
  ): Observable<LabelValue<string>[]> {
    const input: GetObjectStatusListInput = {
      isObjectTypeOfBireSbDTO,
      isObjectTypeOfBireEvolutionDTO,
      isObjectTypeOfBireMaintenancePlanDTO,
      objectStatus,
      isSapSession
    };

    return super.post<GetObjectStatusListInput, LabelValue<string>[]>(this.propertiesApi.getObjectStatusList, input);
  }

  public getObjectStatusAllList(
    isObjectTypeOfBireSbDTO: boolean,
    isObjectTypeOfBireEvolutionDTO: boolean,
    isObjectTypeOfBireMaintenancePlanDTO: boolean,
    objectStatus: string | undefined,
    isSapSession: boolean
  ): Observable<LabelValue<string>[]> {
    const input: GetObjectStatusListInput = {
      isObjectTypeOfBireSbDTO,
      isObjectTypeOfBireEvolutionDTO,
      isObjectTypeOfBireMaintenancePlanDTO,
      objectStatus,
      isSapSession
    };

    return super.post<GetObjectStatusListInput, LabelValue<string>[]>(this.propertiesApi.getObjectStatusAllList, input);
  }

  public getTimeZones(): Observable<LabelValue<string>[]> {
    return this.getFromCache(this.propertiesApi.timezones, 'timezones');
  }

  public getValue(key: string): Observable<LabelValue<string>[]> {
    const url = `${ServerUtils.removeTrailingSeparator(this.propertiesApi.generic)}/${key}`;

    return this.getFromCache(url, key);
  }

  public getValueByKey(pkey: string, key: string): Observable<string> {
    const url = `${ServerUtils.removeTrailingSeparator(this.propertiesApi.generic)}/${pkey}/${key}`;

    return super.post<string, string>(url);
  }

  public getZones(): Observable<LabelValue<string>[]> {
    return this.getFromCache(this.propertiesApi.zones, 'zones');
  }

  public resetCache(key?: string): void {
    if (!!key) {
      this.cache.delete(key);
    } else {
      this.cache.clear();
    }
  }

  private getFromCache(url: string, key: string): Observable<LabelValue<string>[]> {
    const resultFromCache = this.cache.get(key);
    if (!!resultFromCache) {
      return of(resultFromCache);
    } else {
      return super.post<void, LabelValue<string>[]>(url).pipe(tap((result) => this.cache.set(key, result)));
    }
  }

  public getObjectStatusLabel(key: string): Observable<string> {
    return super.post<string, string>(this.propertiesApi.getObjectStatusLabel, key);
  }

  public getFamilyFunctionMap(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.propertiesApi.getFamilyFunctionMap);
  }

  public getFuncObjectStatusValueByKey(key: string): Observable<string> {
    return super.post<string, string>(this.propertiesApi.getFuncObjectStatusValueByKey, key);
  }

  public getFullPackageTypeMap(): Observable<LabelValue<BidtPackageTypeDTO>[]> {
    return super.post<undefined, LabelValue<BidtPackageTypeDTO>[]>(this.propertiesApi.getFullPackageTypeMap);
  }
}
