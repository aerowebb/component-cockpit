import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BidoEquipmentDTO } from '../../../../../../generated_files/api-types/bido-equipment-dto.interface';
import { BidtDfTypeApi } from '../../../../shared/api/bidt-df-type.api';
import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { ExtractTranslationPipe } from '../../../../shared/pipes/extract-translation.pipe';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { BidtDfTypeDTO } from '../../../../shared/types/api-types/bidt-df-type-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { ListUtils } from '../../../../shared/utils/list-utils';
import { StringUtils } from '../../../../shared/utils/string-utils';

export enum DocumentType {
  DOCUMENT_TYPE_PROCUREMENT_REQUEST,
  DOCUMENT_TYPE_WORK_PACKAGE
}

@Injectable()
export class TransferOrderService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly bidtDfTypeApi: BidtDfTypeApi,
    private readonly translateService: TranslateService,
    private readonly propertiesService: PropertiesService,
    private readonly extractTranslationPipe: ExtractTranslationPipe,
    private readonly fleetManagementApi: FleetManagementApi
  ) {
    super(http, appConfigService);
  }

  public fetchTypeList(): Observable<LabelValue<number>[]> {
    return super.post<void, BidtDfTypeDTO[]>(this.bidtDfTypeApi.findShipmentDfTypes).pipe(
      map((dfTypes) => {
        return ListUtils.orEmpty(dfTypes).map((dfType) => {
          return {
            label: StringUtils.orEmpty(this.extractTranslationPipe.transform(dfType.dftDesignation)),
            value: dfType.id as number
          };
        });
      })
    );
  }

  public fetchTypeObjectList(): Observable<LabelValue<BidtDfTypeDTO>[]> {
    return super.post<void, BidtDfTypeDTO[]>(this.bidtDfTypeApi.findShipmentDfTypes).pipe(
      map((dfTypes) => {
        return ListUtils.orEmpty(dfTypes).map((dfType) => {
          return {
            label: StringUtils.orEmpty(this.extractTranslationPipe.transform(dfType.dftDesignation)),
            value: dfType
          };
        });
      })
    );
  }

  public loadDocumentTypes(): LabelValue<number>[] {
    return [
      {
        label: this.translateService.instant('procurementRequest') as string,
        value: DocumentType.DOCUMENT_TYPE_PROCUREMENT_REQUEST
      },
      {
        label: this.translateService.instant('workPackage') as string,
        value: DocumentType.DOCUMENT_TYPE_WORK_PACKAGE
      }
    ];
  }

  public fetchCriticalityList(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.LOGISTICAL_CRITICALITY_MAP);
  }

  public fetchStatusList(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.TRANSFER_FOLDER_STATUS_MAP);
  }

  public fetchProcurementRequestTypeList(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.PROCUREMENT_REQUEST_TYPE_MAP);
  }

  public fetchProcurementRequestStatusList(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.PROCUREMENT_REQUEST_STATUS_MAP);
  }

  public fetchOperationalStatuses(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.OPERATIONAL_STATUS_MAP);
  }

  public fetchStockMvtStatuses(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.MVT_STATUS_MAP);
  }

  public fetchWorkPackageStatuses(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.AIRM_PROJECT_STATUS_MAP);
  }

  public fetchWorkPackageTypes(): Observable<LabelValue<string>[]> {
    return this.propertiesService.getValue(GenericPropertyConstants.WORK_PACKAGE_TYPE_MAP);
  }

  public findBidoEquipmentsByPnAndSn(input: BidoEquipmentDTO): Observable<BidoEquipmentDTO[]> {
    return super.post<BidoEquipmentDTO, BidoEquipmentDTO[]>(
      this.fleetManagementApi.findBidoEquipmentsByPnAndSnCodes,
      input
    );
  }
  public findBidoEquipmentByPnAndBatchNumber(input: BidoEquipmentDTO): Observable<BidoEquipmentDTO> {
    return super.post<BidoEquipmentDTO, BidoEquipmentDTO>(
      this.fleetManagementApi.findBidoEquipmentByPnAndBatchNumber,
      input
    );
  }
}
