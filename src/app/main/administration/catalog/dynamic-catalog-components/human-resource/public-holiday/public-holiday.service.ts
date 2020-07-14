import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidtCompHolidayCompanyApi } from '../../../../../../shared/api/bidt-comp-holiday-company.api';
import { BidtCompanyHolidayApi } from '../../../../../../shared/api/bidt-company-holiday.api';
import { BidtCompanyApi } from '../../../../../../shared/api/bidt-company.api';
import { FleetManagementApi } from '../../../../../../shared/api/fleet-management.api';
import { AbstractAwHttpService } from '../../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../../shared/services/app-config.service';
import { SaveCatalogInput } from '../../../../../../shared/types/api-input-types/catalog/save-catalog-input.interface';
import { BidtCompHolidayCompanyDTO } from '../../../../../../shared/types/api-types/bidt-comp-holiday-company-dto.interface';
import { BidtCompanyDTO } from '../../../../../../shared/types/api-types/bidt-company-dto.interface';
import { PublicHolidayTableDTO } from '../../../../../../shared/types/api-types/bidt-holiday-table-dto.interface';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';

@Injectable()
export class PublicHolidayService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly bidtCompHolidayCompanyApi: BidtCompHolidayCompanyApi,
    private readonly bidtCompanyHolidayApi: BidtCompanyHolidayApi,
    private readonly bidtCompanyApi: BidtCompanyApi
  ) {
    super(http, appConfigService);
  }

  public findByCriteriaHolidayList(id: Number): Observable<PublicHolidayTableDTO[]> {
    return super.post<Number, PublicHolidayTableDTO[]>(this.bidtCompHolidayCompanyApi.findByCompanyId, id);
  }

  public deleteHoliday(id: BidtCompHolidayCompanyDTO[]): Observable<void> {
    return super.post<BidtCompHolidayCompanyDTO[], void>(this.bidtCompanyHolidayApi.delete, id);
  }
  public findBidtCompanyByCriteria(criteria: BidtCompanyDTO): Observable<LabelValue<string>[]> {
    return super.post<BidtCompanyDTO, LabelValue<string>[]>(this.bidtCompanyApi.findByCriteria, criteria);
  }
  public saveCatalog(saveCatalogInput: SaveCatalogInput): Observable<void> {
    return super.post<SaveCatalogInput, void>(this.fleetManagementApi.saveCatalog, saveCatalogInput);
  }
}
