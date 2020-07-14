import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';

import { PackageSearchService } from './package-search.service';

@Component({
  selector: 'aw-package-search',
  styleUrls: ['./package-search.component.scss'],
  templateUrl: './package-search.component.html'
})
export class PackageSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  public hideSearchCriteria: boolean;
  public types: SelectItem[];
  public dateExpeditionList: SelectItem[];
  public dateReceptionList: SelectItem[];
  public selectedType: string;
  public selectedDateExpedition: string;
  public selectedDateReception: string;

  // Table
  public resultTableCols: TableColumn[];
  public resultsTable: unknown[];
  public selectedResults: unknown[];

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly packageSearchService: PackageSearchService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
    this.hideSearchCriteria = false;
    this.bindSelectButtons();
  }

  public getComponentName(): string {
    return ComponentConstants.LOG_PACKAGE_SEARCH_COMPONENT;
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.displayComponentContext('global.search', true);
    this.loadTableCols();
    this.resultsTable = [];
    this.selectedResults = [];
  }

  public search(): void {
    this.resultsTable = [];
    this.selectedResults = [];
    this.hideSearchCriteria = true;
    this.resultsTable = this.packageSearchService.getPackages();
  }

  public openPackageDetails(rowData): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.LOG_PACKAGE_FORM_COMPONENT,
      openMode: ComponentOpenMode.Read
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  private loadTableCols() {
    this.resultTableCols = [
      { field: 'package', alignment: 'left' },
      { field: 'receiptFolder', alignment: 'left' },
      { field: 'status', alignment: 'left' },
      { field: 'shippedDate', alignment: 'left' },
      { field: 'receiptDate', alignment: 'left' },
      { field: 'situation', alignment: 'left' }
    ];
  }

  private bindSelectButtons(): void {
    this.types = [
      { label: 'Immediate', value: 'Immediate' },
      { label: 'Urgent', value: 'Urgent' },
      { label: 'Routine', value: 'Routine' }
    ];
    this.dateExpeditionList = [
      { label: 'Before', value: 'Before' },
      { label: 'Le', value: 'Le' },
      { label: 'After', value: 'After' }
    ];
    this.dateReceptionList = [
      { label: 'Before', value: 'Before' },
      { label: 'Le', value: 'Le' },
      { label: 'After', value: 'After' }
    ];

    this.selectedType = 'Immediate';
    this.selectedDateExpedition = 'Le';
    this.selectedDateReception = 'Le';
  }
}
