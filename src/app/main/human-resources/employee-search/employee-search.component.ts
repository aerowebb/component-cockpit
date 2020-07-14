import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';

import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../shared/services/confirmation.service';
import { ExportService } from '../../../shared/services/export.service';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { TabService } from '../../../shared/services/tab.service';
import { FindEmployeeBySearchCriteriaInput } from '../../../shared/types/api-input-types/bidt-employee/find-employee-by-search-criteria-input.interface';
import { BidtEmployeeDTO } from '../../../shared/types/api-types/bidt-employee-dto.interface';
import { BidtSiteDTO } from '../../../shared/types/api-types/bidt-site-dto.interface';
import { SearchEmployeeTableDTO } from '../../../shared/types/api-types/search-employee-table-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { PageComponent } from '../../../shared/types/page-component';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../shared/types/table-column.interface';

import { EmployeeSearchService } from './employee-search.service';

interface EmployeeListTableExport {
  employeeLastName: string;
  employeeFirstName: string;
  employeeNumber?: string;
  bidtCompanyName: string;
  bidtSiteName: string;
}

@Component({
  selector: 'aw-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.scss']
})
export class EmployeeSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  public searchObject: FindEmployeeBySearchCriteriaInput;
  public companies: LabelValue<string>[];
  public sites: LabelValue<string>[];
  public resultsTable: SearchResultsDTO<SearchEmployeeTableDTO>;
  public resultsTableCols: TableColumn[];
  public selectedEmployees: SearchEmployeeTableDTO[];
  public companyId: number;
  public globalFilterTxt: string;
  private siteDTOList: BidtSiteDTO[];
  private readonly resultsTableExportName: string;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly employeeSearchService: EmployeeSearchService,
    private readonly exportService: ExportService,
    private readonly confirmationService: ConfirmationService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.resultsTableExportName = 'employee-list';

    this.searchObject = { bidtEmployeeDTO: {} };
    this.companies = [];
    this.sites = [];
    this.resultsTable = { list: [], moreResults: false };
    this.selectedEmployees = [];
    this.siteDTOList = [];
    this.resultsTableCols = [
      { field: 'employeeLastName', alignment: 'left' },
      { field: 'employeeFirstName', alignment: 'left' },
      { field: 'employeeNumber', alignment: 'left' },
      { field: 'bidtCompanyName', alignment: 'left' },
      { field: 'bidtSiteName', alignment: 'left' }
    ];

    this.loadCompanies();
    this.loadSites();
  }

  public getComponentName(): string {
    return 'EmployeeSearchComponent';
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.displayComponentContext('global.search', true);
  }

  public resetSearchCriteria(): void {
    this.searchObject = { bidtEmployeeDTO: {}, companyId: undefined };
    // reload sites data
    this.loadSites();
  }

  private loadCompanies(): void {
    this.employeeSearchService.findBidtCompanyByCriteria({}).subscribe((results) => {
      this.companies = results;
    });
  }

  public loadSites(): void {
    this.sites = [];
    if (this.searchObject.companyId !== null && this.searchObject.companyId !== undefined) {
      this.siteDTOList.forEach((element) => {
        if (
          element.bidtCompanyId &&
          this.searchObject.companyId &&
          element.bidtCompanyId.toString() === this.searchObject.companyId.toString()
        ) {
          const labelValue: LabelValue<string> = {
            label: `${element.siteCode} - ${element.siteName}`,
            value: (element.siteId && element.siteId.toString()) || ''
          };
          this.sites.push(labelValue);
        }
      });
      if (this.sites.length > 0) {
        this.searchObject.bidtEmployeeDTO.bidtSiteId = Number.parseInt(this.sites[0].value, 0);
      }
    } else {
      this.employeeSearchService.findBidtSiteByCriteria({}).subscribe((results) => {
        this.siteDTOList = results;
        this.sites = this.siteDTOList.map((element) => {
          const labelValue: LabelValue<string> = {
            label: `${element.siteCode} - ${element.siteName}`,
            value: (element.siteId && element.siteId.toString()) || ''
          };

          return labelValue;
        });
        this.searchObject.bidtEmployeeDTO.bidtSiteId = undefined;
      });
    }
  }

  public resetResultsTable(table: Table): void {
    table.reset();
    table.filters = {};
  }

  public search(): void {
    this.employeeSearchService.findEmployeeBySearchCriteria(this.searchObject).subscribe((result) => {
      this.setResultsTable(result);
    });
  }

  private setResultsTable(result: SearchResultsDTO<SearchEmployeeTableDTO>): void {
    if (!!result) {
      this.resultsTable = result;
      this.resultsTable.list.forEach((element) => {
        if (element.bidtSiteId !== null && element.bidtSiteId !== undefined) {
          element.bidtCompanyName = this.formatCompany(element.bidtSiteId);
          element.bidtSiteName = this.formatSite(element.bidtSiteId);
        }
      });
    }

    this.selectedEmployees = [];
  }

  public exportTable(): void {
    const tableList: EmployeeListTableExport[] = this.resultsTable.list.map((row) => {
      const tableRow: EmployeeListTableExport = {
        employeeLastName: row.employeeLastName as string,
        employeeFirstName: row.employeeFirstName as string,
        employeeNumber: row.employeeNumber,
        bidtCompanyName: row.bidtCompanyName as string,
        bidtSiteName: row.bidtSiteName as string
      };

      return tableRow;
    });

    this.exportService.toExcel(tableList, this.resultsTableExportName, this.componentData.componentId);
  }

  public formatCompany(siteId: number): string {
    const selectedSite = this.siteDTOList.find((siteObj) => {
      return siteObj.siteId === siteId;
    });
    const selectedCompany = this.companies.find((company) => {
      if (selectedSite && selectedSite.bidtCompanyId !== null && selectedSite.bidtCompanyId !== undefined) {
        return company.value === selectedSite.bidtCompanyId.toString();
      } else {
        return false;
      }
    });

    return selectedCompany ? selectedCompany.label : '';
  }

  public formatSite(siteId: number): string {
    const selectedSite = this.sites.find((site) => {
      return site.value === siteId.toString();
    });

    return selectedSite ? selectedSite.label : '';
  }

  public deleteSelectedEmployees(): void {
    const selectedBidtEmployees: BidtEmployeeDTO[] = [];
    this.confirmationService.confirmDelete({
      messageKey: 'global.confirmSelectedDataDelete',
      accept: () => {
        this.selectedEmployees.forEach((employee) => {
          selectedBidtEmployees.push(employee as BidtEmployeeDTO);
        });

        this.employeeSearchService.deleteEmployees(selectedBidtEmployees).subscribe(
          (result) => {
            this.search();
            this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteEmployee'));
          },
          (error) => {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnDeleteEmployee'));
          }
        );
        this.selectedEmployees = [];
      }
    });
  }

  private openEmployee(openMode: ComponentOpenMode, object?: BidtEmployeeDTO): void {
    const labelKey = 'transaction.EmployeeFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'EmployeeFormComponent',
      objectId: object && this.serializationService.serialize(object),
      openMode
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openNewEmployee(): void {
    this.openEmployee(ComponentOpenMode.Create);
  }

  public openSelectedEmployees(): void {
    this.selectedEmployees.forEach((employee) => {
      this.openEmployee(ComponentOpenMode.Read, employee as BidtEmployeeDTO);
    });
    this.selectedEmployees = [];
  }

  public resetTableFilter(): void {
    this.globalFilterTxt = '';
  }
}
