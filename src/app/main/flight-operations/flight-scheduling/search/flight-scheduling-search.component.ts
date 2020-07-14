import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/components/table/table';

import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ExportService } from '../../../../shared/services/export.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { BidoCustomerDTO } from '../../../../shared/types/api-types/bido-customer-dto.interface';
import { BidoFleetDTO } from '../../../../shared/types/api-types/bido-fleet-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';

import { FlightSchedulingSearchService } from './flight-scheduling-search.service';

interface FleetDataExport {
  fleetCode?: string;
  fleetName?: string;
  customerCode?: string;
}

@Component({
  selector: 'aw-flight-scheduling-search',
  styleUrls: ['./flight-scheduling-search.component.scss'],
  templateUrl: './flight-scheduling-search.component.html'
})
export class FlightSchedulingSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  public readonly componentId: string;
  public isReadOnlyForm: boolean;

  public showQuickSearchBusinessPartnerPopup: boolean;

  public resultsTable: SearchResultsDTO<BidoFleetDTO>;
  public resultsTableCols: TableColumn[];
  public searchObject: BidoFleetDTO;
  public selectedFleets: BidoFleetDTO[];

  public resultsTableExportName: string;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly flightSchedulingSearchService: FlightSchedulingSearchService,
    private readonly exportService: ExportService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.isReadOnlyForm = false;
    this.showQuickSearchBusinessPartnerPopup = false;

    this.resultsTable = { list: [], moreResults: false };
    this.searchObject = {};
    this.selectedFleets = [];

    this.resultsTableExportName = 'fleet-list';

    this.resultsTableCols = [
      { field: 'fleetCode', alignment: 'left' },
      { field: 'fleetName', alignment: 'left' },
      { field: 'customerCode', alignment: 'left' }
    ];
  }

  public getComponentName(): string {
    return ComponentConstants.FLI_FLIGHT_SCHEDULING_SEARCH;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.displayComponentContext('global.search', true);
  }

  public quickSearchBusinessPartner(): void {
    this.showQuickSearchBusinessPartnerPopup = true;
  }

  public resetResultsTable(table: Table): void {
    table.reset();
    table.filters = {};
  }

  public search(): void {
    const bidoFleetDTO: BidoFleetDTO = this.searchObject;

    this.flightSchedulingSearchService.getBidoFleetsBySearchCriteria(bidoFleetDTO).subscribe((results) => {
      if (results) {
        this.resultsTable = results;
      }
      this.selectedFleets = [];
    });
  }

  public resetSearchCriteria(): void {
    this.searchObject = {};
  }

  public openViewSchedule(object: BidoFleetDTO | undefined, openMode: ComponentOpenMode): void {
    if (object) {
      const labelKey = 'transaction.FlightSchedulingFormComponent';
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: 'FlightSchedulingFormComponent',
        objectId: this.serializationService.serialize(object),
        openMode
      };
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public openViewScheduleForSelectedFleet(): void {
    this.selectedFleets.forEach((fleet) => {
      if (fleet) {
        if (fleet.fleetId && fleet.fleetId.length > 0) {
          this.openViewSchedule(fleet, ComponentOpenMode.Write);
        } else {
          this.messageService.showWarningMessage(this.getTranslateKey('errorOnMissingFleetId'));
        }
      }
    });
  }

  public openFleetForm(fleet: BidoFleetDTO) {
    if (!!fleet && !!fleet.fleetId) {
      const labelKey = 'transaction.FleetFormComponent';
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: 'FleetFormComponent',
        objectId: this.serializationService.serialize(fleet),
        openMode: ComponentOpenMode.Read
      };
      this.tabService.open(this.tabService.create(data, labelKey, true));
    } else {
      this.messageService.showWarningMessage(this.getTranslateKey('errorOnMissingFleetId'));
    }
  }

  public setSelectedBusinessPartner(event: BidoCustomerDTO): void {
    this.searchObject.customerCode = event.customerCode;
  }

  public exportTable(): void {
    const dataToExport: FleetDataExport[] = [];
    this.resultsTable.list.forEach((fleet) => {
      const fleetDataExport: FleetDataExport = {
        fleetCode: fleet.fleetCode,
        fleetName: fleet.fleetName,
        customerCode: fleet.customerCode
      };
      dataToExport.push(fleetDataExport);
    });
    this.exportService.toExcel(dataToExport, this.resultsTableExportName, this.componentData.componentId);
  }
}
