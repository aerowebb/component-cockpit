import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AMProjectManagementApi } from '../../../../shared/api/am-project-management.api';
import { UserProfileBusinessApi } from '../../../../shared/api/user-profile-business.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { AccessRightQueryDTO } from '../../../../shared/types/api-types/access-right-query-dto.interface';
import { BidmProjectAttributeDTO } from '../../../../shared/types/api-types/bidm-project-attribute-dto.interface';
import { BidmProjectDTOId } from '../../../../shared/types/api-types/bidm-project-dto-id.interface';
import { BidmProjectDTO } from '../../../../shared/types/api-types/bidm-project-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { SelectItemUtils } from '../../../../shared/utils/select-item-utils';

@Injectable()
export class WorkPackageSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly amProjectManagementApi: AMProjectManagementApi,
    private readonly userProfileBusinessApi: UserProfileBusinessApi
  ) {
    super(http, appConfigService);
  }

  private getBsdeProjectDateCriteria(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.amProjectManagementApi.getBsdeProjectDateCriteria);
  }

  public removeBidmProject(input: BidmProjectDTOId): Observable<void> {
    return super.post<BidmProjectDTOId, void>(this.amProjectManagementApi.removeBidmProject, input);
  }

  public findBidmProjectsBySearchCriteria(criteria: BidmProjectDTO): Observable<SearchResultsDTO<BidmProjectDTO>> {
    return super.post<BidmProjectDTO, SearchResultsDTO<BidmProjectDTO>>(
      this.amProjectManagementApi.findBidmProjectsByProjectCriteriaWithMaxResult,
      criteria
    );
  }

  public findBidmProjectAttributesByWorkOrder(
    bidmProjectDTOId: BidmProjectDTOId
  ): Observable<BidmProjectAttributeDTO[]> {
    return super.post<BidmProjectDTOId, BidmProjectAttributeDTO[]>(
      this.amProjectManagementApi.findBidmProjectAttributesByWorkOrder,
      bidmProjectDTOId
    );
  }

  public loadDateCriteriaList(): Observable<SelectItem[]> {
    return this.getBsdeProjectDateCriteria().pipe(
      map((results) => {
        return !!results ? SelectItemUtils.fromLabelValues(results) : [];
      })
    );
  }

  public hasManagePMRights(input: AccessRightQueryDTO): Observable<boolean> {
    return super.post<AccessRightQueryDTO, boolean>(this.userProfileBusinessApi.hasManageRights, input);
  }
}
