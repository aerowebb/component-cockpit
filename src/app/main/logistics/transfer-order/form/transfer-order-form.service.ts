import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';

import { AMProjectManagementApi } from '../../../../shared/api/am-project-management.api';
import { BidtDocumentApi } from '../../../../shared/api/bidt-document.api';
import { FleetManagementApi } from '../../../../shared/api/fleet-management.api';
import { ProductStructureManagementApi } from '../../../../shared/api/product-structure-management.api';
import { UserProfileManagementApi } from '../../../../shared/api/user-profile-management.api';
import { AbstractAwHttpService } from '../../../../shared/http/abstract-aw-http';
import { AppConfigService } from '../../../../shared/services/app-config.service';
import { BidmProjectDTO } from '../../../../shared/types/api-types/bidm-project-dto.interface';
import { BidoCustomerDTOId } from '../../../../shared/types/api-types/bido-customer-dto-id.interface';
import { BidoCustomerDTO } from '../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidoUserDTO } from '../../../../shared/types/api-types/bido-user-dto.interface';
import { BidtDocumentDTO } from '../../../../shared/types/api-types/bidt-document-dto.interface';
import { BidtProcurementRequestDTO } from '../../../../shared/types/api-types/bidt-procurement-request-dto.interface';
import { BidtTorItemDTO } from '../../../../shared/types/api-types/bidt-tor-item-dto.interface';
import { BidtTransferOrderDTO } from '../../../../shared/types/api-types/bidt-transfer-order-dto.interface';
import { BirePnDTOId } from '../../../../shared/types/api-types/bire-pn-dto-id.interface';
import { BirePnDTO } from '../../../../shared/types/api-types/bire-pn-dto.interface';
import { FindTransferOrdersByCriteriaOutput } from '../../../../shared/types/api-types/find-transfer-orders-by-criteria-output';
import { LogisticsService } from '../../logistics.service';

import { ArticleInterface, MainInfoInterface } from './transfer-order-form.component';

interface MaterialTableInterface {
  article?: string;
  articleDesignation?: string;
  sn?: string;
  status?: string;
  site?: string;
  warehouse?: string;
  zone?: string;
  emp?: string;
  statusLabel?: string;
  potential?: string;
  lapsed?: string;
}

@Injectable()
export class TransferOrderFormService extends AbstractAwHttpService {
  public constructor(
    http: HttpClient,
    appConfigService: AppConfigService,
    private readonly amProjectManagementApi: AMProjectManagementApi,
    private readonly bidtDocumentApi: BidtDocumentApi,
    private readonly fleetManagementApi: FleetManagementApi,
    private readonly userProfileManagementApi: UserProfileManagementApi,
    private readonly bidtProductStructureManagementTypeApi: ProductStructureManagementApi,
    private readonly logisticsService: LogisticsService
  ) {
    super(http, appConfigService);
  }

  public findTransferOrderById(id: number): Observable<FindTransferOrdersByCriteriaOutput> {
    return this.logisticsService.findTransferOrdersById(id);
  }

  public findBidmProjectById(projectId: number): Observable<BidmProjectDTO> {
    return super.post<number, BidmProjectDTO>(this.amProjectManagementApi.findBidmProject, projectId);
  }

  public fetchTransferOrderData(tor: BidtTransferOrderDTO): Observable<MainInfoInterface> {
    const workPackage$ = !!tor.bidmProjectProjectId ? this.findBidmProjectById(tor.bidmProjectProjectId) : of({});

    return workPackage$.pipe(
      concatMap((workPackage: BidmProjectDTO) => {
        return of({
          number: tor.torCode,
          type: tor.torType ? Number(tor.torType) : undefined,
          status: tor.torStatus,
          control: tor.criticality,

          refDocId: workPackage.projectId,
          isWorkPackageRefDoc: true,
          refDocumentNum: workPackage && workPackage.projectNumber ? workPackage.projectNumber.toString() : undefined,
          refDocType: workPackage.projectType,
          refStatus: workPackage.statusState,

          supplierSite: tor.bidtSiteIssue ? tor.bidtSiteIssue.siteCode : undefined,
          supplierShop: tor.bidtWarehouseIssue ? tor.bidtWarehouseIssue.whName : undefined,
          supplierShipmentDate: tor.shipmentExpectedDate ? tor.shipmentExpectedDate : undefined,

          recipientSite: tor.bidtSiteReceipt ? tor.bidtSiteReceipt.siteCode : undefined,
          recipientSiteId: tor.bidtSiteReceipt ? tor.bidtSiteReceipt.siteId : undefined,
          recipientShop: tor.bidtWarehouseReceipt ? tor.bidtWarehouseReceipt.whName : undefined,
          recipientWarehouseId: tor.bidtWarehouseReceipt ? tor.bidtWarehouseReceipt.wareHouseId : undefined,
          recipientDate: tor.receiptExpectedDate ? tor.receiptExpectedDate : undefined
        });
      })
    );
  }

  public fetchTorRefDocument(bidtProcurementRequest: BidtProcurementRequestDTO): Observable<MainInfoInterface> {
    const mainInfo: MainInfoInterface = {};
    if (!bidtProcurementRequest) {
      return of(mainInfo);
    }
    if (bidtProcurementRequest.procCode) {
      mainInfo.refDocumentNum = bidtProcurementRequest.procCode;
    }
    if (bidtProcurementRequest.procType) {
      mainInfo.refDocType = bidtProcurementRequest.procType;
    }
    mainInfo.refStatus = bidtProcurementRequest.procStatus;
    mainInfo.isProcurementRequestRefDoc = true;
    mainInfo.isWorkPackageRefDoc = false;

    return of(mainInfo);
  }

  public fetchTorCreated(bidtTransferOrder: BidtTransferOrderDTO): Observable<MainInfoInterface> {
    if (bidtTransferOrder.statusUser) {
      return this.findUser(bidtTransferOrder.statusUser).pipe(
        map((user) => {
          return {
            created: bidtTransferOrder.statusDate,
            applicant: `${user.firstname} ${user.lastname}`,
            applicantLogin: user.login
          };
        })
      );
    }

    return of({});
  }

  public fetchArticleData(torItem: BidtTorItemDTO): Observable<ArticleInterface> {
    return this.getBirePnByPn({ pnCode: torItem.birePnPnCode }).pipe(
      map((birePn) => {
        const articleIf: ArticleInterface = {
          pn: birePn.pnCode,
          articleDesignation: birePn.articleDesignation,
          quantity: torItem.quantity,
          quantityUnit: birePn.quantityUnit,
          otanPnReference: birePn.otanPnReference,
          quantityPerIssue: birePn.quantityPerIssue,
          bidtProcReqItemDTO: torItem
        };

        return articleIf;
      })
    );
  }
  public getBirePnByPn(birePnPnCode: BirePnDTOId): Observable<BirePnDTO> {
    return super.post<BirePnDTOId, BirePnDTO>(this.bidtProductStructureManagementTypeApi.findBirePn, birePnPnCode);
  }

  public findBidoCustomer(customerId: BidoCustomerDTOId): Observable<BidoCustomerDTO> {
    return super.post<BidoCustomerDTOId, BidoCustomerDTO>(this.fleetManagementApi.findBidoCustomer, customerId);
  }

  public findDocumentsByTransferOrderId(transferOrderId: number): Observable<BidtDocumentDTO[]> {
    return super.post<number, BidtDocumentDTO[]>(this.bidtDocumentApi.findByTransferOrderId, transferOrderId);
  }

  public addSN() {
    return {
      stockMvtSn: '2225-02',
      mvtStatus: 'Cancel'
    };
  }

  public addStock() {
    return {
      movementNum: 'OSM3243254324',
      movementName: 'Picking',
      type: '1',
      site: 'BA123',
      warehouse: 'Magasin General',
      zone: 'Stockage',
      emp: 'AD988',
      inboundLocalistaion: 'Sorte',
      status: 'Planned',
      date: '19/09/2019'
    };
  }

  public getItemData() {
    return {
      pn: '13312-10',
      transferQuantity: '3',
      reserve: 0,
      withdrawn: 0,
      sent: 0,
      designation: '### DESIGNATION DU P/N ###',
      selectionQuantity: '1'
    };
  }

  public loadMaterialData(): MaterialTableInterface[] {
    return [
      {
        article: '131100-29',
        articleDesignation: 'Interchangeable',
        sn: '22112-02',
        status: 'Disponible',
        statusLabel: 'Reserve',
        site: 'BA118',
        warehouse: 'Magasin General',
        zone: 'Stockage',
        emp: 'YH123',
        potential: '240 FH',
        lapsed: '90 Jours'
      },
      {
        article: '213412-12',
        sn: '22112-32',
        status: 'Disponible',
        site: 'BA338',
        statusLabel: 'Reserve',
        warehouse: 'Magasin General',
        zone: 'Stockage',
        emp: 'YH123',
        potential: '240 FH',
        lapsed: '90 Jours'
      },
      {
        article: '131100-29',
        sn: '22112-02',
        status: 'Disponible',
        statusLabel: '',
        site: 'BA668',
        warehouse: 'Magasin General',
        zone: 'Stockage',
        emp: 'FV213',
        potential: '240 FH',
        lapsed: '90 Jours'
      },
      {
        article: '131100-29',
        articleDesignation: 'Interchangeable',
        sn: '22112-02',
        status: 'Disponible',
        statusLabel: 'Reserved for DA S4000',
        site: 'BA118',
        warehouse: 'Magasin General',
        zone: 'Sorte',
        emp: 'IO9213',
        potential: '240 FH',
        lapsed: '72 Jours'
      }
    ];
  }

  /**************************************************************************
   * User profile management api
   *************************************************************************/

  private findUser(input: string): Observable<BidoUserDTO> {
    return super.post<string, BidoUserDTO>(this.userProfileManagementApi.findUserByLogin, input);
  }
}
