import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { BidtDeliveryFolderApi } from '../../../shared/api/bidt-delivery-folder.api';
import { BidtDfTypeOperationApi } from '../../../shared/api/bidt-df-type-operation.api';
import { BidtSiteApi } from '../../../shared/api/bidt-site.api';
import { BidtWarehouseApi } from '../../../shared/api/bidt-warehouse.api';
import { FleetManagementApi } from '../../../shared/api/fleet-management.api';
import { GenericPropertyConstants } from '../../../shared/constants/generic-property-constants';
import { AbstractAwHttpService } from '../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../shared/services/app-config.service';
import { PropertiesService } from '../../../shared/services/properties.service';
import { BidtDeliveryFolderDTO } from '../../../shared/types/api-types/bidt-delivery-folder-dto.interface';
import { BidtSiteDTO } from '../../../shared/types/api-types/bidt-site-dto.interface';
import { BidtWarehouseDTO } from '../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';

@Injectable()
export class DeliveryFolderSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly propertiesService: PropertiesService,
    private readonly bidtSiteApi: BidtSiteApi,
    private readonly bidtWarehouseApi: BidtWarehouseApi,
    private readonly bidtDeliveryFolderApi: BidtDeliveryFolderApi,
    public readonly translateService: TranslateService,
    public readonly bidtDfTypeOperationApi: BidtDfTypeOperationApi,
    public readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  public addOrUpdateReceiptFolder(input: BidtDeliveryFolderDTO): Observable<BidtDeliveryFolderDTO> {
    return super.post<BidtDeliveryFolderDTO, BidtDeliveryFolderDTO>(
      this.bidtDeliveryFolderApi.addOrUpdateReceiptFolder,
      input
    );
  }

  public findAllBireSite(): Observable<BidtSiteDTO[]> {
    return super.post<void, BidtSiteDTO[]>(this.bidtSiteApi.findAll);
  }

  public findAllSiteList(): Observable<BidtSiteDTO[]> {
    return super.post<void, BidtSiteDTO[]>(this.bidtSiteApi.findSiteByUseCaseMmReceipt);
  }

  public loadStatusList(folderStatusMap: string): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(folderStatusMap);
  }

  public loadCriticalityList(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.LOGISTICAL_CRITICALITY_MAP);
  }

  public getWarehouseCategoryMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.WAREHOUSE_CATEGORY_MAP);
  }

  public getWorkshopTypeMap(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.WORKSHOP_TYPE_MAP);
  }

  public getWarehousesBySiteId(siteId: number | undefined): Observable<BidtWarehouseDTO[]> {
    if (siteId) {
      return super.post<number, BidtWarehouseDTO[]>(this.bidtWarehouseApi.findBySiteId, siteId);
    } else {
      return super.post<number, BidtWarehouseDTO[]>(this.bidtWarehouseApi.findAll);
    }
  }

  public loadProviderList() {
    return [
      { value: '0', label: `${this.translateService.instant('GoodsReceiptFormComponent.internal')}` },
      { value: '1', label: `${this.translateService.instant('GoodsReceiptFormComponent.external')}` }
    ];
  }

  public loadCreationChoiceList() {
    return [
      { value: '0', label: `${this.translateService.instant('GoodsReceiptFormComponent.currentPackage')}` },
      { value: '1', label: `${this.translateService.instant('GoodsReceiptFormComponent.newPackage')}` },
      { value: '2', label: `${this.translateService.instant('GoodsReceiptFormComponent.without')}` }
    ];
  }

  public loadShipmentPackageChoiceList() {
    return [
      { value: '0', label: `${this.translateService.instant('GoodsReceiptFormComponent.newPackage')}` },
      { value: '1', label: `${this.translateService.instant('GoodsReceiptFormComponent.without')}` }
    ];
  }

  public loadCreationChoiceListPackage() {
    return [
      { value: '0', label: `${this.translateService.instant('GoodsReceiptFormComponent.generated')}` },
      { value: '1', label: `${this.translateService.instant('GoodsReceiptFormComponent.enter')}` }
    ];
  }

  public loadCreationChoiceListPackageNumber() {
    return [
      { value: '0', label: `${this.translateService.instant('GoodsReceiptFormComponent.generatedPackage')}` },
      { value: '1', label: `${this.translateService.instant('GoodsReceiptFormComponent.enterPackage')}` }
    ];
  }

  public loadCreationChoiceListPackagingNumber() {
    return [
      { value: '0', label: `${this.translateService.instant('GoodsReceiptFormComponent.generatedPackaging')}` },
      { value: '1', label: `${this.translateService.instant('GoodsReceiptFormComponent.enterPackagingNumber')}` }
    ];
  }

  public loadCreationChoiceListItem() {
    return [
      { value: '0', label: `${this.translateService.instant('GoodsReceiptFormComponent.currentItem')}` },
      { value: '1', label: `${this.translateService.instant('GoodsReceiptFormComponent.newItem')}` }
    ];
  }

  public loadCreationAssetChoice() {
    return [
      { value: '0', label: `${this.translateService.instant('GoodsReceiptFormComponent.unknowAsset')}` },
      { value: '1', label: `${this.translateService.instant('GoodsReceiptFormComponent.knowAsset')}` }
    ];
  }
}
