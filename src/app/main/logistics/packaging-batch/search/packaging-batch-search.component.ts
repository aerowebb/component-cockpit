import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { ISearchCriteria } from '../../../../shared/components/manage-search-criteria/search-criteria.interface';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { GenericPropertyConstants } from '../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { PropertiesService } from '../../../../shared/services/properties.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { BidoEquipmentDTO } from '../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BireVariantVersionDTO } from '../../../../shared/types/api-types/bire-variant-version-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';
import { ListUtils } from '../../../../shared/utils/list-utils';

import { PackagingBatchSearchService } from './packaging-batch-search.service';

interface CustomFamilyVariantLabelValue {
  label: string;
  value: BireVariantVersionDTO;
}

interface PackagingBatchResultInterface {
  pn?: string;
  quantity?: number;
  batchNumber?: string;
  designation?: string;
  operationalStatus?: string;
  date?: Date;
  assetCode?: string;
}

@Component({
  selector: 'aw-packaging-batch-search',
  styleUrls: ['./packaging-batch-search.component.scss'],
  templateUrl: './packaging-batch-search.component.html'
})
export class PackagingBatchSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  public readonly SEARCH_CRITERIA_ID: string; // TODO: Add a search ID

  @ViewChild('resultsContainerAnchor')
  public resultsContainerAnchor: ElementRef;

  public hideSearchCriteria: boolean;

  // Table
  public resultTableCols: TableColumn[];
  public resultsTable: PackagingBatchResultInterface[];
  public selectedResults: PackagingBatchResultInterface[];

  // Dropdowns
  public familyVariantList: CustomFamilyVariantLabelValue[];
  public statusList: LabelValue<string>[];

  public searchCriteria: PackagingBatchResultInterface;
  public searchCriteriaCalculated: boolean;
  public searchCriteriaToSave: PackagingBatchResultInterface;

  public shopList: SelectItem[];

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly propertiesService: PropertiesService,
    public sessionService: SessionService,
    private readonly packagingBatchSearchService: PackagingBatchSearchService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
  }

  public getComponentName(): string {
    return ComponentConstants.LOG_PACKAGING_BATCH_SEARCH;
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.displayComponentContext('global.search', true);

    this.searchCriteria = {};
    this.resultsTable = [];
    this.selectedResults = [];
    this.loadTableCols();
  }

  /************************************
   * Load Tech Receipt Table Columns
   ************************************/
  private loadTableCols() {
    this.resultTableCols = [
      { field: 'batchNumber', alignment: 'left' },
      { field: 'pn', alignment: 'left' },
      { field: 'quantity', alignment: 'left' },
      { field: 'designation', alignment: 'left' },
      { field: 'operationalStatus', alignment: 'left' },
      { field: 'date', alignment: 'left' },
      { field: 'assetCode', alignment: 'left' }
    ];

    this.loadDropdowns();
  }

  /************************************
   * Fetch Dropdown Data
   ************************************/
  private loadDropdowns(): void {
    this.propertiesService.getValue(GenericPropertyConstants.BATCH_EQUIPMENT_STATUS_MAP).subscribe((results) => {
      this.statusList = results;
    });
    this.loadFamilyVariantList();
  }

  private loadFamilyVariantList(): void {
    const familyFunction = '';

    this.packagingBatchSearchService.findAllBireVariantVersionByFamilyFunction(familyFunction).subscribe((results) => {
      this.familyVariantList = ListUtils.orEmpty(results)
        .filter((familyVariant) => !!familyVariant.familyCode && !!familyVariant.variantCode)
        .map((familyVariant) => {
          const label =
            `${familyVariant.familyName || familyVariant.familyCode}` +
            '-' +
            `${familyVariant.variantName || familyVariant.variantCode}`;

          return {
            label,
            value: familyVariant
          };
        });
    });
  }

  /************************************
   * Load Tech Receipt
   ************************************/
  public search() {
    this.hideSearchCriteria = true;
    const bidoObject = this.getbidoInputObject();
    this.resultsTable = [];
    this.packagingBatchSearchService.loadPackagingBatchData(bidoObject).subscribe((result) => {
      if (result && result.length) {
        this.mapBidoEqupmentOutput(result);
      }
    });
  }

  private mapBidoEqupmentOutput(result: BidoEquipmentDTO[]): void {
    result.forEach((element) => {
      const tableObject: PackagingBatchResultInterface = {
        batchNumber: element.batchNumber,
        pn: element.pnCode,
        designation: element.equipmentDesignation,
        operationalStatus: this.getOprationalStatus(element.operationalStatus || ''),
        date: element.eisDate,
        assetCode: element.equipmentCode,
        quantity: element.quantity
      };

      this.resultsTable.push(tableObject);
    });
  }

  private getOprationalStatus(status: string): string {
    const result = this.statusList.find(({ value }) => value === status);

    return result ? result.label : '';
  }

  private getbidoInputObject(): BidoEquipmentDTO {
    const equpmantObject: BidoEquipmentDTO = {
      pnCode: this.searchCriteria.pn,
      batchNumber: this.searchCriteria.batchNumber,
      equipmentDesignation: this.searchCriteria.designation,
      operationalStatus: this.searchCriteria.operationalStatus,
      eisDate: this.searchCriteria.date
    };

    return equpmantObject;
  }
  /************************************
   * Open Selected Tech Receipt
   ************************************/
  public openSelectedBatch(rowData: PackagingBatchResultInterface) {
    if (!!rowData) {
      this.selectedResults = [];
      this.selectedResults.push(rowData);
    }

    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_PACKAGING_BATCH_FORM,
      openMode: ComponentOpenMode.Read
    };

    data.objectId = this.selectedResults[0].assetCode;

    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  /**********************************
   * Search Criteria
   **********************************/
  public loadSearchCriteria(event: ISearchCriteria): void {
    const criteria = event.criteria as PackagingBatchResultInterface | undefined;
    if (criteria) {
      if (!this.componentData.objectId) {
        this.searchCriteria = criteria;
      } else {
        this.componentData.objectId = undefined;
      }

      this.search();
    } else {
      this.clearSearchCriteria();
    }
  }

  private clearSearchCriteria(): void {
    this.searchCriteria = {};
  }

  public saveSearchCriteriaAsked(): void {
    this.searchCriteriaToSave = this.searchCriteria;
  }

  /**
   * Open item screen form
   */
  public openNewPackaging(): void {
    this.openPackaging(undefined, ComponentOpenMode.Create);
  }

  private openPackaging(objectId: string | undefined, openMode: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_PACKAGING_BATCH_FORM,
      openMode
    };
    const labelKey = 'transaction.' + data.componentId;
    this.tabService.open(this.tabService.create(data, labelKey, true));
  }
}
