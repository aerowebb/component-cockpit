import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';

import { DocumentApi } from '../api/document.api';
import { ProductStructureManagementApi } from '../api/product-structure-management.api';
import { AbstractAwHttpService } from '../http/abstract-aw-http';
import { BidoBireDocumentDTO } from '../types/api-types/bido-bire-documentdto';
import { BidoBireWrapperId } from '../types/api-types/bido-bire-wrapper-id';
import { BidoEquipmentDTO } from '../types/api-types/bido-equipment-dto.interface';
import { BireDocItemDTO } from '../types/api-types/bire-doc-item-dto.interface';
import { BireItemDTOId } from '../types/api-types/bire-item-dto-id.interface';
import { ImageUtils } from '../utils/image-utils';

import { AppConfigService } from './app-config.service';

@Injectable()
export class FileService extends AbstractAwHttpService {
  public constructor(http: HttpClient,
                     appConfigService: AppConfigService,
                     private readonly domSanitizer: DomSanitizer,
                     private readonly productStructureManagementApi: ProductStructureManagementApi,
                     private readonly documentApi : DocumentApi
  ) {
    super(http, appConfigService);
  }

  public findIllustration(bireItemDtoId: BireItemDTOId | undefined, bidoEquipementDTO: BidoEquipmentDTO)
    : Observable<BidoBireDocumentDTO> {
    const bidoBireId : BidoBireWrapperId = {
      bidoEquipmentDTOId: {equipmentCode: bidoEquipementDTO.equipmentCode},
      bireItemDTOId: bireItemDtoId,
      sn: bidoEquipementDTO.sn
    };

    return super.post<BidoBireWrapperId, BidoBireDocumentDTO>(
      this.documentApi.findBidoBireDoc, bidoBireId);
  }

  public findBireDocItemByPnCode(input: string): Observable<BireDocItemDTO | undefined> {
    return super.post<string, BireDocItemDTO | undefined>(
      this.productStructureManagementApi.findBireDocItemByPnCode,
      input
    );
  }

  public sanitizeAndGetBase64Prefix(illustrationDocument: BidoBireDocumentDTO) : SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(
      `${ImageUtils.getBase64Prefix(illustrationDocument.docType)}${illustrationDocument.docFile}`);
  }
}
