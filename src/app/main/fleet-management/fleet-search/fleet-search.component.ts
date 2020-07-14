import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';

import { ISearchCriteria } from '../../../shared/components/manage-search-criteria/search-criteria.interface';
import { TableDataSource } from '../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../shared/services/confirmation.service';
import { ExportService } from '../../../shared/services/export.service';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { TabService } from '../../../shared/services/tab.service';
import { BidoCustomerDTO } from '../../../shared/types/api-types/bido-customer-dto.interface';
import { BidoFleetDTOId } from '../../../shared/types/api-types/bido-fleet-dto-id.interface';
import { BidoFleetDTO } from '../../../shared/types/api-types/bido-fleet-dto.interface';
import { PageComponent } from '../../../shared/types/page-component';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';

import { FleetSearchService } from './fleet-search.service';

interface FleetDataExport {
  fleetCode?: string;
  fleetName?: string;
  customerCode?: string;
}

@Component({
  selector: 'aw-fleet-search',
  templateUrl: './fleet-search.component.html'
})
export class FleetSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  public readonly componentId: string;
  public isReadOnlyForm: boolean;
  public isLoading: boolean;

  public showQuickSearchBusinessPartnerPopup: boolean;

  public fleetTableDataSource: TableDataSource<BidoFleetDTO>;
  public searchObject: BidoFleetDTO;

  public resultsTableExportName: string;

  public criteriaToSave: BidoFleetDTO;
  public criteriaName: string | undefined;

  public readonly FLEET_SEARCH_CRITERIA_ID: string = '7';

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly fleetSearchService: FleetSearchService,
    private readonly confirmationService: ConfirmationService,
    private readonly exportService: ExportService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.isLoading = false;
    this.isReadOnlyForm = false;
    this.showQuickSearchBusinessPartnerPopup = false;

    this.searchObject = {};

    this.resultsTableExportName = 'fleet-list';

    this.initFleetTableDataSource();
  }

  public getComponentName(): string {
    return 'FleetSearchComponent';
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.displayComponentContext('global.search', true);
  }

  private initFleetTableDataSource(): void {
    this.fleetTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'fleetCode',
          translateKey: this.getTranslateKey('fleetCode')
        },
        {
          field: 'fleetName',
          translateKey: this.getTranslateKey('fleetName')
        },
        {
          field: 'customerCode',
          translateKey: this.getTranslateKey('customerCode')
        }
      ],
      data: []
    });
  }

  public quickSearchBusinessPartner(): void {
    this.showQuickSearchBusinessPartnerPopup = true;
  }

  public resetResultsTable(table: Table): void {
    table.reset();
    table.filters = {};
  }

  public search(): void {
    this.isLoading = true;
    this.fleetTableDataSource.setData([]);
    const bidoFleetDTO: BidoFleetDTO = this.searchObject;

    this.fleetSearchService.getBidoFleetsBySearchCriteria(bidoFleetDTO).subscribe((results) => {
      if (results) {
        this.fleetTableDataSource.setData(results.list);
      }
      this.fleetTableDataSource.dataSelection = [];
      this.isLoading = false;
    });
  }

  public resetSearchCriteria(): void {
    this.criteriaName = undefined;
    this.searchObject = {};
  }

  public loadSearchCriteria(event: ISearchCriteria): void {
    const criteria: BidoFleetDTO | undefined = event.criteria;
    if (!criteria) {
      this.resetSearchCriteria();

      return;
    }
    this.criteriaName = event.name;
    this.searchObject = criteria || {};
  }

  public saveSearchCriteriaAsked(): void {
    const criteriaToSave: BidoFleetDTO = this.searchObject;
    this.criteriaToSave = criteriaToSave;
  }

  public deleteFleets(): void {
    const partialMessageKey =
      this.fleetTableDataSource.dataSelectionCount > 1 ? 'confirmDeleteSelectedFleets' : 'confirmDeleteSelectedFleet';

    const fleets = new Array<BidoFleetDTOId>();
    this.fleetTableDataSource.dataSelection.forEach((fleet) => {
      if (fleet && fleet.fleetId) {
        const fleetId: BidoFleetDTOId = {
          fleetId: fleet.fleetId
        };
        fleets.push(fleetId);
      }
    });
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.fleetSearchService.removeBidoFleet(fleets).subscribe(
          (result) => {
            this.search();
            this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteFleet'));
          },
          (error) => {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnDeleteFleet'));
          }
        );
        this.fleetTableDataSource.dataSelection = [];
        this.search();
      }
    });
  }

  public openFleet(object: BidoFleetDTO | undefined, openMode: ComponentOpenMode): void {
    if (object !== null) {
      const labelKey = 'transaction.FleetFormComponent';
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: 'FleetFormComponent',
        objectId: this.serializationService.serialize(object),
        openMode
      };
      this.tabService.open(this.tabService.create(data, labelKey, true));
    } else {
      const labelKey = 'transaction.FleetFormComponent';
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: 'FleetFormComponent',
        objectId: undefined,
        openMode
      };
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public openFleetLink(fleet: BidoFleetDTO): void {
    if (fleet) {
      if (fleet.fleetId && fleet.fleetId.length > 0) {
        this.openFleet(fleet, ComponentOpenMode.Read);
      } else {
        this.messageService.showWarningMessage(this.getTranslateKey('errorOnMissingFleetId'));
      }
    }
  }

  public openSelectedFleets(): void {
    this.fleetTableDataSource.dataSelection.forEach((fleet) => {
      if (fleet) {
        if (fleet.fleetId && fleet.fleetId.length > 0) {
          this.openFleet(fleet, ComponentOpenMode.Read);
        } else {
          this.messageService.showWarningMessage(this.getTranslateKey('errorOnMissingFleetId'));
        }
      }
    });
  }

  public openNewFleet(): void {
    this.openFleet(undefined, ComponentOpenMode.Create);
  }

  public setSelectedBusinessPartner(event: BidoCustomerDTO): void {
    this.searchObject.customerCode = event.customerCode;
  }

  public exportTable(): void {
    const dataToExport: FleetDataExport[] = [];
    this.fleetTableDataSource.dataSrc.forEach((fleet) => {
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
