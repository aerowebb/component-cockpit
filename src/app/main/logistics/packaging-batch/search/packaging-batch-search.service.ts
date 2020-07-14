import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BidoEquipmentApi } from '../../../../shared/api/bido-equipment.api';
import { BidtWarehouseApi } from '../../../../shared/api/bidt-warehouse.api';
import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { FindAllBireVariantVersionByFamilyFunctionInput } from '../../../../shared/types/api-input-types/product-structure-management/find-all-bire-variant-version-by-family-function-input.interface';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidtWarehouseDTO } from '../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { BireVariantVersionDTO } from '../../../../shared/types/api-types/bire-variant-version-dto.interface';

@Injectable()
export class PackagingBatchSearchService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtWarehouseApi: BidtWarehouseApi,
    private readonly bidoEquipmentApi: BidoEquipmentApi,
    private readonly productStructureManagementApi: ProductStructureManagementApi
  ) {
    super(http, appConfigService);
  }

  public findAllBireVariantVersionByFamilyFunction(
    familyFunction: string | undefined
  ): Observable<BireVariantVersionDTO[]> {
    const param = {
      familyFunction
    };

    return super.post<FindAllBireVariantVersionByFamilyFunctionInput, BireVariantVersionDTO[]>(
      this.productStructureManagementApi.findAllBireVariantVersionByFamilyFunction,
      param
    );
  }

  public loadPackagingBatchData(equipmentObj: BidoEquipmentDTO): Observable<BidoEquipmentDTO[]> {
    return super.post<BidoEquipmentDTO, BidoEquipmentDTO[]>(
      this.bidoEquipmentApi.findPackagingBatchesByCriteria,
      equipmentObj
    );
  }

  public getWarehousesBySiteId(siteId: number): Observable<BidtWarehouseDTO[]> {
    return super.post<number, BidtWarehouseDTO[]>(this.bidtWarehouseApi.findBySiteId, siteId);
  }
}
