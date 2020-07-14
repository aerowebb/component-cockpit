import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AssetManagementApi } from '../../../../../../shared/api/asset-management.api';
import { AbstractAwHttpService } from '../../../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../../../shared/services/app-config.service';
import { AssetInputDto } from '../../../../../../shared/types/api-input-types/fleet-management/asset-input-dto.interface';
import { BidoEquipmentDTO } from '../../../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BidoNotificationDTO } from '../../../../../../shared/types/api-types/bido-notification-dto.interface';
import { FileContentDTO } from '../../../../../../shared/types/api-types/file-content-dto.interface';


@Injectable()
export class ReportDialogFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly assetManagementApi : AssetManagementApi

  ) {
    super(http, appConfigService);
  }

  public generateLogCard(bidoEquipmentDto: BidoEquipmentDTO): Observable<FileContentDTO> {
    return super.post<BidoEquipmentDTO, FileContentDTO>(
      this.assetManagementApi.generateLogCardEquipment,
      bidoEquipmentDto
    );
  }

  public generateLogBook(assetInputDto: AssetInputDto): Observable<FileContentDTO> {
    return super.post<AssetInputDto, FileContentDTO>(
      this.assetManagementApi.generateLogBook,
      assetInputDto
    );
  }

  public generateLlp(input: string): Observable<FileContentDTO> {
    return super.post<string, FileContentDTO>(
      this.assetManagementApi.generateLlp,
      input
    );
  }

  public generateAsb(input: string): Observable<FileContentDTO> {
    return super.post<string, FileContentDTO>(
      this.assetManagementApi.generateAdsb,
      input
    );
  }

  public generateDefectCard(input: BidoNotificationDTO[]): Observable<FileContentDTO> {
    return super.post<BidoNotificationDTO[], FileContentDTO>(
      this.assetManagementApi.generateDefectCard,
      input
    );
  }

}
