import { Injectable } from '@angular/core';

import { AbstractApi } from './abstract.api';

@Injectable()
export class UnitConversionMatrixApi extends AbstractApi {
  private static readonly baseUrl: string = '/bire_conversion_matrix';

  public readonly searchUnitMatrixConversion: string = super.appendToBaseUrl('/search');
  public readonly getUnitMatrixConversion: string = super.appendToBaseUrl('/get_by_id');
  public readonly getDefaultMatrixByFamilyVariant: string = super.appendToBaseUrl('/get_default_by_family_variant');
  public readonly deleteUnitMatrixConversion: string = super.appendToBaseUrl('/delete');
  public readonly saveConversionMatrix: string = super.appendToBaseUrl('/save');

  public constructor() {
    super(UnitConversionMatrixApi.baseUrl);
  }
}
