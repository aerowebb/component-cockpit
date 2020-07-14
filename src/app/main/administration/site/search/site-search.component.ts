import { Component, OnInit } from '@angular/core';

import { ISearchCriteria } from '../../../../shared/components/manage-search-criteria/search-criteria.interface';
import { ColumnAlignment, TableDataSource } from '../../../../shared/components/table/table-data-source';
import { AppConstants } from '../../../../shared/constants/app-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { ExportService } from '../../../../shared/services/export.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { BidtSiteDTO } from '../../../../shared/types/api-types/bidt-site-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { StringUtils } from '../../../../shared/utils/string-utils';

import { SiteSearchService } from './site-search.service';

interface SiteRowExport {
  siteCode: string;
  siteName: string;
  bidtCompanyId: string;
  siteDescription: string;
}

interface SiteRow extends SiteRowExport {
  siteId?: number;
}

@Component({
  selector: 'aw-site-search',
  styleUrls: ['./site-search.component.scss'],
  templateUrl: './site-search.component.html'
})
export class SiteSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  private static readonly CUSTOMER_TABLE_EXPORT_NAME: string = 'site-list';

  public isLoading: boolean;
  public searchObject: BidtSiteDTO;
  public criteriaToSave: BidtSiteDTO;
  public criteriaName: string | undefined;

  public companies: LabelValue<string>[];
  public siteTableDataSource: TableDataSource<SiteRow>;
  public displayedSiteRowNb: number;

  public hasBeenCalculated: boolean;

  public readonly SEARCH_CRITERIA_ID: string = AppConstants.SITE_SEARCH_CRITERIA_ID;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly siteSearchService: SiteSearchService,
    private readonly confirmationService: ConfirmationService,
    private readonly exportService: ExportService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.isLoading = false;
    this.companies = [];
    this.displayedSiteRowNb = 0;
    this.searchObject = {};

    this.resetSearchCriteria();
    this.initSiteTableDataSource();
    this.loadCompany();
  }

  public getComponentName(): string {
    return ComponentConstants.ADM_SITE_SEARCH;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.displayComponentContext('global.search', true);
  }

  public loadCompany(): void {
    this.siteSearchService.findBidtCompanyByCriteria({}).subscribe((results) => {
      this.companies = results;
    });
  }

  public deleteSites(): void {
    const confirmMessageKey =
      this.siteTableDataSource.dataSelectionCount > 1 ? 'confirmDeleteSelectedSites' : 'confirmDeleteSelectedSite';
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(confirmMessageKey),
      accept: () => {
        const selectedBidtSiteDTOId = new Array<number>();
        this.siteTableDataSource.dataSelection.forEach((site) => {
          if (!!site && !!site.siteCode) {
            const siteIds: BidtSiteDTO = {
              siteId: site.siteId
            };
            if (!!siteIds.siteId) {
              selectedBidtSiteDTOId.push(siteIds.siteId);
            } else {
              super.throwUnboundLocalError('deleteSites', 'siteIds.siteId');
            }
          }
        });
        this.siteSearchService.removeBidtSite(selectedBidtSiteDTOId).subscribe(() => {
          this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteSite'));
          this.siteTableDataSource.dataSelection = [];
          this.search();
        });
      }
    });
  }

  public exportTable(): void {
    let siteExportData: SiteRowExport[];

    siteExportData = this.siteTableDataSource.dataSrc.map((site) => {
      const siteRowExport: SiteRowExport = {
        siteCode: site.siteCode,
        siteName: site.siteName,
        bidtCompanyId: site.bidtCompanyId,
        siteDescription: site.siteDescription
      };

      return siteRowExport;
    });

    if (!!this.componentData) {
      this.exportService.toExcel(
        siteExportData,
        SiteSearchComponent.CUSTOMER_TABLE_EXPORT_NAME,
        this.componentData.componentId
      );
    } else {
      super.throwUnboundLocalError('exportTable', 'this.componentData');
    }
  }

  public openNewSite(): void {
    this.openSite(undefined, ComponentOpenMode.Create);
  }

  public openSelectedSites(): void {
    this.siteTableDataSource.dataSelection.forEach((site) => {
      if (!!site) {
        if (!!site.siteId && StringUtils.isNullOrEmpty(site.siteId.toString())) {
          this.messageService.showWarningMessage(this.getTranslateKey('errorOnMissingSiteCode'));
        } else {
          this.openSite(site, ComponentOpenMode.Read);
        }
      }
    });
  }

  public resetSearchCriteria(): void {
    this.criteriaName = undefined;
    this.searchObject = {};
  }

  public loadSearchCriteria(event: ISearchCriteria): void {
    const criteria: BidtSiteDTO | undefined = event.criteria;
    if (!criteria) {
      this.resetSearchCriteria();

      return;
    }
    // do not load criteria first time if we come from stock alert page
    if (!this.componentData.objectId) {
      this.criteriaName = event.name;
      this.searchObject = criteria || {};
    } else {
      this.componentData.objectId = undefined;
    }
    this.search();
  }

  public saveSearchCriteriaAsked(): void {
    const criteriaToSave: BidtSiteDTO = this.searchObject;
    this.criteriaToSave = criteriaToSave;
  }

  public search(): void {
    this.isLoading = true;
    this.siteTableDataSource.setData([]);
    this.siteSearchService.findBidtSiteByCriteria(this.searchObject).subscribe((result) => {
      this.setresultTable(result);
      this.isLoading = false;
    });
  }

  public updateDisplayedSiteRowNb(value: number): void {
    this.displayedSiteRowNb = value;
  }

  private initSiteTableDataSource(): void {
    this.siteTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'siteCode',
          translateKey: this.getTranslateKey('siteCode'),
          alignment: ColumnAlignment.LEFT,
          width: '25%'
        },
        {
          field: 'siteName',
          translateKey: this.getTranslateKey('siteName'),
          alignment: ColumnAlignment.LEFT,
          width: '25%'
        },
        {
          field: 'bidtCompanyId',
          translateKey: this.getTranslateKey('bidtCompanyId'),
          alignment: ColumnAlignment.LEFT,
          width: '25%'
        },
        {
          field: 'siteDescription',
          translateKey: this.getTranslateKey('siteDescription'),
          alignment: ColumnAlignment.LEFT,
          width: '25%'
        }
      ],
      data: []
    });
  }

  public formatCompany(companyId: number): string {
    const selectedCompany = this.companies.find((company) => {
      return company.value === companyId.toString();
    });

    return selectedCompany ? selectedCompany.label : '';
  }

  private openSite(objectId: SiteRow | undefined, openMode: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ADM_SITE_FORM,
      openMode
    };
    if (!!objectId) {
      const siteFormId: BidtSiteDTO = {
        siteId: objectId.siteId,
        siteCode: objectId.siteCode,
        siteName: objectId.siteName
      };
      data.objectId = this.serializationService.serialize(siteFormId);
    }
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private setresultTable(result: SearchResultsDTO<BidtSiteDTO>): void {
    if (!!result) {
      const results: SiteRow[] = [];
      result.list.forEach((res) => {
        if (!!res && !!res.bidtCompanyId && !!res.siteCode) {
          const siteRow: SiteRow = {
            siteCode: res.siteCode,
            siteName: res.siteName ? res.siteName : '',
            bidtCompanyId: this.formatCompany(res.bidtCompanyId),
            siteDescription: res.siteDescription ? res.siteDescription : '',
            siteId: res.siteId
          };

          results.push(siteRow);
        }
      });

      this.siteTableDataSource.setData(results);
      this.siteTableDataSource.update();

      this.displayedSiteRowNb = this.siteTableDataSource.dataCount;
    }
    this.siteTableDataSource.dataSelection = [];
  }
}
