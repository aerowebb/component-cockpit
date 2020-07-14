import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { TableDataSource } from '../../../../../shared/components/table/table-data-source';
import { AWPropertiesConstants } from '../../../../../shared/constants/aw-properties-constants';
import { ComponentConstants } from '../../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../../shared/services/confirmation.service';
import { FavoriteService } from '../../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../../shared/services/loader.service';
import { MessageService } from '../../../../../shared/services/message.service';
import { SerializationService } from '../../../../../shared/services/serialization.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { TabService } from '../../../../../shared/services/tab.service';
import { BidoCustomerDTO } from '../../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidtDeliveryFolderDTO } from '../../../../../shared/types/api-types/bidt-delivery-folder-dto.interface';
import { BidtDeliveryFolderIdDTO } from '../../../../../shared/types/api-types/bidt-delivery-folder-id-dto.interface';
import { BidtDfTypeDTO } from '../../../../../shared/types/api-types/bidt-df-type-dto.interface';
import { BidtWarehouseDTO } from '../../../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { FormPageComponent } from '../../../../../shared/types/form-page-component';
import { PageComponentData } from '../../../../../shared/types/page-component-data.interface';
import { DeliveryFolderSearchService } from '../../../goods-receipt/delivery-folder-search.service';
import { LogisticsService } from '../../../logistics.service';

interface MaterialMainInfo {
  bidtDfType: BidtDfTypeDTO;
  bidtWarehouseSender: BidtWarehouseDTO;
  bidoCustomerReceiver: BidoCustomerDTO;
  obj: BidtDeliveryFolderDTO;
}

interface MaterialShipmentRow {
  article?: string;
  designation?: string;
  snLot?: string;
  quantity?: string;
  mvtStatus?: string;
  statusDate?: string;
  materialLocation?: string;
  container?: string;
  originalDocument?: string;
  finalReceipt?: string;
  expectedDate?: string;
  obj?: BidtDeliveryFolderDTO;
}

@Component({
  selector: 'aw-material-shipment-form',
  styleUrls: ['./material-shipment-form.component.scss'],
  templateUrl: './material-shipment-form.component.html'
})
export class MaterialShipmentFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public static readonly ALL = 'ALL';

  public component: typeof MaterialShipmentFormComponent;
  public awPropertiesConstants: typeof AWPropertiesConstants;

  // Table
  public materialShipmentTableDataSource: TableDataSource<MaterialShipmentRow>;

  public materialInfo: MaterialMainInfo;

  public subtitle: string;
  public whName: string;
  public senderSiteName: string;
  public receiverSiteName: string;

  /* HTML references ***********************************************************/

  @ViewChild('resultsContainerAnchor')
  public resultsContainerAnchor: ElementRef;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    public translateService: TranslateService,
    public logisticsService: LogisticsService,
    public readonly deliveryFolderSearchService: DeliveryFolderSearchService,
    public readonly confirmationService: ConfirmationService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
    this.awPropertiesConstants = AWPropertiesConstants;

    this.component = MaterialShipmentFormComponent;

    this.loadTableCols();
    this.init();
  }

  public ngOnInit(): void {
    super.ngOnInit();

    // Fetching component data
    if (!!this.componentData.objectId) {
      this.loadMaterialShipment(this.serializationService.deserialize(this.componentData.objectId));
    }
  }

  public getComponentName(): string {
    return ComponentConstants.LOG_GOODS_MATERIAL_SHIPMENT_FORM;
  }

  private init(): void {
    this.materialInfo = {
      bidtDfType: {},
      bidtWarehouseSender: {},
      bidoCustomerReceiver: {},
      obj: {}
    };
    this.subtitle = 'BA 118 - MDM';
    this.whName = 'Magasin General';
    this.senderSiteName = '';
    this.receiverSiteName = '';
  }

  /*************************************************
   * Function to fetch page data
   *************************************************/
  private loadMaterialShipment(dtoId: BidtDeliveryFolderIdDTO): void {
    this.logisticsService.findShipmentMaterial(dtoId).subscribe((results) => {
      if (!!results) {
        const materialInfo = results;
        this.subtitle = !!materialInfo.bidtSiteSender
          ? `${materialInfo.bidtSiteSender.siteCode} - ${materialInfo.bidtSiteSender.siteName}`
          : '';
        this.senderSiteName = this.subtitle;
        this.receiverSiteName = !!materialInfo.bidtSiteReceiver
          ? `${materialInfo.bidtSiteReceiver.siteCode} - ${materialInfo.bidtSiteReceiver.siteName}`
          : '';
        this.whName =
          !!materialInfo.bidtWarehouseSender && !!materialInfo.bidtWarehouseSender.whName
            ? materialInfo.bidtWarehouseSender.whName
            : '';

        this.materialInfo = {
          bidtDfType: !!materialInfo.bidtDfType ? (materialInfo.bidtDfType as BidtDfTypeDTO) : {},
          bidtWarehouseSender: !!materialInfo.bidtWarehouseSender
            ? (materialInfo.bidtWarehouseSender as BidtWarehouseDTO)
            : {},
          bidoCustomerReceiver: !!materialInfo.bidoCustomerReceiver
            ? (materialInfo.bidoCustomerReceiver as BidoCustomerDTO)
            : {},
          obj: materialInfo
        };

        if (!!materialInfo.dfCode) {
          this.displayComponentContext(materialInfo.dfCode as string, this.isReadOpenMode);
        }
      }
    });
  }

  /************************************
   * Initialize Shiipment Table Columns
   ************************************/
  private loadTableCols() {
    this.materialShipmentTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        { field: 'article', translateKey: this.getTranslateKey('article') },
        { field: 'snLot', translateKey: this.getTranslateKey('snLot') },
        { field: 'quantity', translateKey: this.getTranslateKey('quantity') },
        { field: 'mvtStatus', translateKey: this.getTranslateKey('mvtStatus') },
        { field: 'materialLocation', translateKey: this.getTranslateKey('materialLocation') },
        { field: 'container', translateKey: this.getTranslateKey('container') },
        { field: 'originalDocument', translateKey: this.getTranslateKey('originalDocument') },
        { field: 'finalReceipt', translateKey: this.getTranslateKey('finalReceipt') },
        { field: 'expectedDate', translateKey: this.getTranslateKey('expectedDate') }
      ],
      data: []
    });
  }

  public refresh(): void {
    if (!!this.componentData.objectId) {
      this.loadMaterialShipment(this.serializationService.deserialize(this.componentData.objectId));
    }
  }
}
