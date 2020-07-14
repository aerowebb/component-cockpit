import { Component, OnInit } from '@angular/core';

import { TableDataSource } from '../../../../shared/components/table/table-data-source';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';

import { ManufacturingBatchSearchService } from './manufacturing-batch-search.service';

interface MfgBatchRow {
  batchNumber: string;
  partNumber?: string;
  designation?: string;
  operationalStatus?: string;
  eisDate?: Date;
  assetCode?: string;
  quantity?: number;
}

interface ManufacturingBatchInput {
  pnCode?: string;
  batchNumber?: string;
  designation?: string;
  eisDate?: Date;
  operationalStatus?: string;
  familyVariant?: string;
}

@Component({
  selector: 'aw-manufacturing-batch-search',
  styleUrls: ['./manufacturing-batch-search.component.scss'],
  templateUrl: './manufacturing-batch-search.component.html'
})
export class ManufacturingBatchSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  public mfgBatchTableDataSource: TableDataSource<MfgBatchRow>;
  public manufacturingInputObj: ManufacturingBatchInput;

  public statusList: LabelValue<string>[];

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly propertiesService: PropertiesService,
    private readonly manufacturingBatchSearchService: ManufacturingBatchSearchService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
    this.initMfgBatchTableDataSource();
  }

  public getComponentName(): string {
    return ComponentConstants.LOG_MANUFACTURING_BATCH_SEARCH;
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.manufacturingInputObj = {};
    this.loadDropdowns();
  }

  private loadDropdowns(): void {
    this.propertiesService.getValue(GenericPropertyConstants.BATCH_EQUIPMENT_STATUS_MAP).subscribe((results) => {
      this.statusList = results;
    });
  }

  public search(): void {
    this.mfgBatchTableDataSource.setData([]);
    const bidoEquipmentObject = this.getBidoEquipmentObject();
    this.manufacturingBatchSearchService.getMfgBatchList(bidoEquipmentObject).subscribe((result) => {
      if (result && result.length) {
        this.mapBidoEqupmentOutput(result);
      }
    });
  }

  private getOprationalStatus(status: string): string {
    const result = this.statusList.find(({ value }) => value === status);

    return result ? result.label : '';
  }

  private mapBidoEqupmentOutput(result: BidoEquipmentDTO[]): void {
    const resultsTable: MfgBatchRow[] = [];
    result.forEach((element) => {
      const tableObject: MfgBatchRow = {
        batchNumber: element.batchNumber || '',
        partNumber: element.pnCode,
        designation: element.equipmentDesignation,
        operationalStatus: this.getOprationalStatus(element.operationalStatus || ''),
        eisDate: element.manufacturingDate,
        assetCode: element.equipmentCode,
        quantity: element.quantity
      };
      resultsTable.push(tableObject);
    });
    this.mfgBatchTableDataSource.setData(resultsTable);
  }

  private getBidoEquipmentObject(): BidoEquipmentDTO {
    const bidoObject: BidoEquipmentDTO = {
      pnCode: this.manufacturingInputObj.pnCode,
      batchNumber: this.manufacturingInputObj.batchNumber,
      equipmentDesignation: this.manufacturingInputObj.designation,
      operationalStatus: this.manufacturingInputObj.operationalStatus,
      manufacturingDate: this.manufacturingInputObj.eisDate
    };

    return bidoObject;
  }

  public openMfgBatchDetail(batchNumber: string) {
    this.manufacturingBatchSearchService.openMfgBatch(batchNumber);
  }

  public openMfgBatchDetails(mfgBatchRows: MfgBatchRow[]) {
    mfgBatchRows.forEach((mfgBatch) => {
      this.manufacturingBatchSearchService.openMfgBatch(mfgBatch.assetCode);
    });
  }

  private initMfgBatchTableDataSource(): void {
    this.mfgBatchTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'batchNumber',
          translateKey: this.getTranslateKey('batchNumber')
        },
        {
          field: 'partNumber',
          translateKey: this.getTranslateKey('partNumber')
        },
        {
          field: 'quantity',
          translateKey: this.getTranslateKey('quantity')
        },
        {
          field: 'designation',
          translateKey: this.getTranslateKey('designation')
        },
        {
          field: 'operationalStatus',
          translateKey: this.getTranslateKey('operationalStatus')
        },
        {
          field: 'eisDate',
          translateKey: this.getTranslateKey('eisDate')
        },
        {
          field: 'assetCode',
          translateKey: this.getTranslateKey('assetCode')
        }
      ]
    });
  }

  /**
   * Open manufacturing screen form
   */
  public openNewManufacturing(): void {
    this.openManufacturing(undefined, ComponentOpenMode.Create);
  }

  private openManufacturing(objectId: string | undefined, openMode: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_MANUFACTURING_BATCH_FORM,
      openMode
    };
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }
}
