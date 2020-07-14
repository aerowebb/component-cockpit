import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductStructureManagementApi } from '../../../shared/api/product-structure-management.api';
import { StandardImportPmApi } from '../../../shared/api/standard-import-pm.api';
import { UserProfileManagementApi } from '../../../shared/api/user-profile-management.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { FindPnFromFamilyVariantItem } from '../../../shared/types/api-input-types/product-structure-management/find-pn-from-family-variant-item.interface';
import { InspectionMatrixOutput } from '../../../shared/types/api-output-types/inspection-matrix-output.interface';
import { BireItemDTOId } from '../../../shared/types/api-types/bire-item-dto-id.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';

@Injectable()
export class ComponentCockpitMatrixService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly productStructureManagementApi: ProductStructureManagementApi,
    private readonly standardImportPmApi: StandardImportPmApi,
    private readonly userProfileManagementApi: UserProfileManagementApi
  ) {
    super(http, appConfigService);
  }

  public getInspectionMatrix(): Observable<InspectionMatrixOutput[]> {
    return super.post<void, InspectionMatrixOutput[]>(this.userProfileManagementApi.getInspectionMatrix);
  }

  public getImportTaskBsdeXLS(): Observable<Uint8Array> {
    return super.post<void, Uint8Array>(this.standardImportPmApi.getImportTaskBsdeXLS);
  }

  public saveInspectionMatrix(rowList: InspectionMatrixOutput[]) {
    return super.post<InspectionMatrixOutput[], void>(this.userProfileManagementApi.saveInspectionMatrix, rowList);
  }

  public removeBidoPreferenceUser(id: string[]) {
    return super.post<string[], void>(this.userProfileManagementApi.removeBidoPreferenceUser, id);
  }

  public fillMatrixType(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.userProfileManagementApi.fillMatrixType);
  }

  public fillMatrixMatching(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.userProfileManagementApi.fillMatrixMatching);
  }

  public fillMatrixStatus(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.userProfileManagementApi.fillMatrixStatus);
  }

  public getMrocenter(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.userProfileManagementApi.getMrocenter);
  }

  public getCustomer(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.userProfileManagementApi.getCustomer);
  }

  public getFamily(): Observable<LabelValue<string>[]> {
    return super.post<void, LabelValue<string>[]>(this.userProfileManagementApi.getFamily);
  }

  public getVariantFromFamilyCode(family: string): Observable<LabelValue<string>[]> {
    return super.post<string, LabelValue<string>[]>(
      this.productStructureManagementApi.getVariantFromFamilyCode,
      family
    );
  }

  public getItemFromFamilyAndVariant(bireItemDTOId: BireItemDTOId): Observable<LabelValue<string>[]> {
    return super.post<BireItemDTOId, LabelValue<string>[]>(
      this.productStructureManagementApi.getItemFromFamilyAndVariant,
      bireItemDTOId
    );
  }

  public getPnFromFamilyVariantItem(
    findPnFromFamilyVariantItem: FindPnFromFamilyVariantItem
  ): Observable<LabelValue<string>[]> {
    return super.post<FindPnFromFamilyVariantItem, LabelValue<string>[]>(
      this.productStructureManagementApi.getPnFromFamilyVariantItem,
      findPnFromFamilyVariantItem
    );
  }
}
