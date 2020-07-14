import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { BidtDfTypeApi } from '../../../shared/api/bidt-df-type.api';
import { FleetManagementApi } from '../../../shared/api/fleet-management.api';
import { UserProfileManagementApi } from '../../../shared/api/user-profile-management.api';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { SaveCatalogInput } from '../../../shared/types/api-input-types/catalog/save-catalog-input.interface';
import { CatalogPropertiesTableDTO } from '../../../shared/types/api-output-types/administration-catalog/catalog-properties-table-dto.interface';
import { SavedCatalogOutputDTO } from '../../../shared/types/api-output-types/catalog/saved-catalog-output-dto.inerface';
import { BidoPropertiesDTO } from '../../../shared/types/api-types/bido-properties-dto.interface';
import { BidtDfTypeDTO } from '../../../shared/types/api-types/bidt-df-type-dto.interface';

@Injectable()
export class CatalogService extends AbstractAwHttpService {
  private readonly _refreshButtonSource: Subject<() => void>;
  private readonly _saveButtonSource: Subject<() => void>;
  private readonly _createButtonSource: Subject<() => void>;
  private readonly _importButtonSource: Subject<() => void>;
  private readonly _exportButtonSource: Subject<() => void>;

  private readonly _refreshButton$: Observable<() => void>;
  private readonly _saveButton$: Observable<() => void>;
  private readonly _createButton$: Observable<() => void>;
  private readonly _importButton$: Observable<() => void>;
  private readonly _exportButton$: Observable<() => void>;

  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly userProfileManagement: UserProfileManagementApi,
    private readonly bidtDfTypeApi: BidtDfTypeApi,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);

    this._refreshButtonSource = new Subject<() => void>();
    this._saveButtonSource = new Subject<() => void>();
    this._createButtonSource = new Subject<() => void>();
    this._importButtonSource = new Subject<() => void>();
    this._exportButtonSource = new Subject<() => void>();

    this._refreshButton$ = this._refreshButtonSource.asObservable();
    this._saveButton$ = this._saveButtonSource.asObservable();
    this._createButton$ = this._createButtonSource.asObservable();
    this._importButton$ = this._importButtonSource.asObservable();
    this._exportButton$ = this._exportButtonSource.asObservable();
  }

  public get refreshButton$(): Observable<() => void> {
    return this._refreshButton$;
  }

  public get saveButton$(): Observable<() => void> {
    return this._saveButton$;
  }

  public get createButton$(): Observable<() => void> {
    return this._createButton$;
  }

  public get importButton$(): Observable<() => void> {
    return this._importButton$;
  }

  public get exportButton$(): Observable<() => void> {
    return this._exportButton$;
  }

  public setRefreshButton(f: () => void): void {
    this._refreshButtonSource.next(f);
  }

  public setSaveButton(f: () => void): void {
    this._saveButtonSource.next(f);
  }

  public setCreateButton(f: () => void): void {
    this._createButtonSource.next(f);
  }

  public setImportButton(f: () => void): void {
    this._importButtonSource.next(f);
  }

  public setExportButton(f: () => void): void {
    this._exportButtonSource.next(f);
  }

  public fetchPropertyValuesTableData(propertiesId: number): Observable<CatalogPropertiesTableDTO[]> {
    return super.post<number, CatalogPropertiesTableDTO[]>(
      this.userProfileManagement.findBidoPropertiesValuesByPropertiesId,
      propertiesId
    );
  }

  public savePropertyCatalog(catalogs: CatalogPropertiesTableDTO[]) {
    return super.post<CatalogPropertiesTableDTO[], void>(this.userProfileManagement.saveBidoPropertiesValue, catalogs);
  }

  public getPropertyCatalogIdNameMapping(): Observable<BidoPropertiesDTO[]> {
    return super.post<void, BidoPropertiesDTO[]>(this.userProfileManagement.findAllBidoProperties);
  }

  public saveCatalog(input: SaveCatalogInput): Observable<SavedCatalogOutputDTO> {
    return super.post<SaveCatalogInput, SavedCatalogOutputDTO>(this.fleetManagementApi.saveCatalog, input);
  }

  public synchronizeQualifications(): Observable<void> {
    return super.post<void, void>(this.fleetManagementApi.synchronizeQualifications);
  }

  public deletePropertyCatalog(catalogs: CatalogPropertiesTableDTO[]) {
    return super.post<CatalogPropertiesTableDTO[], void>(
      this.userProfileManagement.deleteBidoPropertiesValue,
      catalogs
    );
  }

  public findReceiptDfTypes(): Observable<BidtDfTypeDTO[]> {
    return super.post<void, BidtDfTypeDTO[]>(this.bidtDfTypeApi.findReceiptDfTypes);
  }
}
