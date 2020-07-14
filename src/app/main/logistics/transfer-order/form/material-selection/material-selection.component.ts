import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { ColumnAlignment, TableDataSource } from '../../../../../shared/components/table/table-data-source';
import { ComponentConstants } from '../../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../../shared/services/loader.service';
import { MessageService } from '../../../../../shared/services/message.service';
import { SerializationService } from '../../../../../shared/services/serialization.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { TabService } from '../../../../../shared/services/tab.service';
import { BidtSiteDTO } from '../../../../../shared/types/api-types/bidt-site-dto.interface';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { PageComponent } from '../../../../../shared/types/page-component';
import { PageComponentData } from '../../../../../shared/types/page-component-data.interface';
import { TransferOrderSearchService } from '../../search/transfer-order-search.service';
import { TransferOrderFormService } from '../transfer-order-form.service';

interface BreadcrumbsLabel {
  title?: string;
  subtittle?: string;
}

interface ItemInterface {
  pn?: string;
  transferQuantity?: string;
  reserve?: number;
  withdrawn?: number;
  sent?: number;
  designation?: string;
  selectionQuantity?: string;
}

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

@Component({
  selector: 'aw-material-selection',
  templateUrl: './material-selection.component.html',
  styleUrls: ['./material-selection.component.scss']
})
export class MaterialSelectionComponent extends PageComponent<PageComponentData> implements OnInit {
  public breadcrumbsList: BreadcrumbsLabel[];
  public breadcrumbsSelectedItem: BreadcrumbsLabel;

  // TODO: remove below variable
  public item: ItemInterface;

  public materialTableDataSource: TableDataSource<MaterialTableInterface>;

  public siteList: SelectItem[];
  public selectedSite: string;

  public warehouseList: LabelValue<string>[];
  public selectedWarehouse: string;
  public date: Date = new Date();
  public readonly reserve: string = 'Reserve';

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    private readonly transferOrderSearchService: TransferOrderSearchService,
    private readonly transferOrderFormService: TransferOrderFormService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
  }

  public getComponentName(): string {
    return ComponentConstants.LOG_MATERIAL_SELECTION;
  }

  public ngOnInit() {
    this.breadcrumbsList = [];
    this.breadcrumbsSelectedItem = {};
    this.item = {};

    this.materialTableDataSource = new TableDataSource({
      allowMultiSelect: false,
      enableSelection: false,
      columns: [
        { field: 'article', translateKey: this.getTranslateKey('article'), width: '15%' },
        { field: 'sn', translateKey: this.getTranslateKey('sn'), width: '15%' },
        { field: 'status', translateKey: this.getTranslateKey('status'), width: '15%' },
        { field: 'warehouse', translateKey: this.getTranslateKey('warehouse'), width: '15%' },
        { field: 'localisation', translateKey: this.getTranslateKey('localisation'), width: '15%' },
        { field: 'tech', translateKey: this.getTranslateKey('tech'), width: '15%' },
        {
          field: 'action',
          translateKey: this.getTranslateKey('action'),
          alignment: ColumnAlignment.CENTER,
          width: '10%'
        }
      ],
      data: []
    });

    this.loadDropdown();
    this.loadMaterialData();
  }

  /***************************************
   * Load Dropdowns
   ***************************************/
  private loadDropdown() {
    this.siteList = [];
    this.transferOrderSearchService.fetchSiteList().subscribe((res: BidtSiteDTO[]) => {
      res.forEach((site) => {
        if (!!site.siteId && !!site.siteName) {
          this.siteList.push({
            label: site.siteName,
            value: site.siteId
          });
        }
      });
    });

    this.transferOrderSearchService.fetchWarehouseList().subscribe((res) => {
      this.warehouseList = res.sort((s1, s2) => s1.value.localeCompare(s2.value));
    });
  }

  /*****************************
   * Load Material table data
   *****************************/
  public loadMaterialData() {
    this.item = this.transferOrderFormService.getItemData();
    const materialData = this.transferOrderFormService.loadMaterialData();
    this.materialTableDataSource.addData(materialData);

    // TEST DATA
    this.breadcrumbsList = [
      {
        subtittle: 'P/N 1311005-10',
        title: 'MATERIAL SELECTION'
      }
    ];

    this.breadcrumbsSelectedItem = this.breadcrumbsList[0];
  }

  public actionClick(rowData: MaterialTableInterface) {
    rowData.statusLabel = rowData.statusLabel === this.reserve ? undefined : this.reserve;
  }
}
