import { Component, OnInit } from '@angular/core';

import { ComponentConstants } from '../../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../../shared/services/confirmation.service';
import { ExportService } from '../../../../../shared/services/export.service';
import { FavoriteService } from '../../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../../shared/services/loader.service';
import { MessageService } from '../../../../../shared/services/message.service';
import { SerializationService } from '../../../../../shared/services/serialization.service';
import { TabService } from '../../../../../shared/services/tab.service';
import { FilterListOutput } from '../../../../../shared/types/api-output-types/filter-list-output-dto.interface';
import { BidoPreferenceUserDTOId } from '../../../../../shared/types/api-types/bido-preference-user-dto-id.interface';
import { BidoPreferenceUserDTO } from '../../../../../shared/types/api-types/bido-preference-user-dto.interface';
import { PageComponent } from '../../../../../shared/types/page-component';
import { PageComponentData } from '../../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../../shared/types/table-column.interface';
import { StringUtils } from '../../../../../shared/utils/string-utils';

import { ComponentCockpitSearchService } from './component-cockpit-search.service';

interface CockPitFilter {
  filterName?: string;
  isPublic?: boolean;
  author?: string;
  isPersistent?: boolean;
}

@Component({
  selector: 'aw-component-cockpit-search',
  templateUrl: './component-cockpit-search.component.html',
  styleUrls: ['./component-cockpit-search.component.scss']
})
export class ComponentCockpitSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  private static readonly FILTER_TABLE_EXPORT_NAME: string = 'Cockpit-filter-list';

  public resultsTableCols: TableColumn[];
  public resultsTable: CockPitFilter[];
  public selectedFilterList : FilterListOutput[];
  public isLoading : boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly confirmationService: ConfirmationService,
    private readonly exportService: ExportService,
    private readonly componentCockpitSearchService: ComponentCockpitSearchService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
    this.resultsTableCols = [
      { field: 'filterName', alignment: 'left' },
      { field: 'graphicalReference', alignment: 'left' },
      { field: 'isPublic', alignment: 'left' },
      { field: 'author', alignment: 'left' },
      { field: 'isPersistent', alignment: 'left' },
    ];
    this.resultsTable = [];
    this.selectedFilterList = [];
    this.isLoading = false;
  }

  public  ngOnInit() {
  super.ngOnInit();
  this.displayComponentContext('global.search', true);
  this.LoadFilterList();
  }

  public getComponentName(): string {
    return 'ComponentCockpitSearchComponent';
  }

  public LoadFilterList(): void {
   this.componentCockpitSearchService.getFilterList().subscribe((results) => {
    this.resultsTable = results;
   });
  }

  public refresh() {
    this.LoadFilterList();
    this.selectedFilterList = [];
  }

  public exportTable(): void {
    const temp: CockPitFilter[] = [];
    this.resultsTable.forEach((obj) => {
      const row: CockPitFilter = {
        filterName : obj.filterName,
        isPublic : obj.isPublic,
        author : obj.author,
        isPersistent : obj.isPersistent,
      };
      temp.push(row);
    });
    this.exportService.toExcel(
      temp,
      ComponentCockpitSearchComponent.FILTER_TABLE_EXPORT_NAME,
      this.componentData.componentId
    );
  }

  public deleteSelectedFilterList(): void {
    const confirmMessageKey =
      this.selectedFilterList.length > 1
        ? 'confirmDeleteSelectedLists'
        : 'confirmDeleteSelectedList';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(confirmMessageKey),
      accept: () => {
        // tslint:disable-next-line:no-any
        const removeList: BidoPreferenceUserDTO[] = [];
        this.selectedFilterList.forEach((obj) => {
          if (!!obj.bidoPreferenceUserDTO && !!obj.bidoPreferenceUserDTO.preferenceUserId ) {
            removeList.push(obj.bidoPreferenceUserDTO);
          }
        });
        this.componentCockpitSearchService.removeFilterList(removeList).subscribe(() => {
          this.LoadFilterList();
          this.messageService.showSuccessMessage(this.getTranslateKey('onSuccessDeleteList'));
        }, (err) => {
          this.messageService.showErrorMessage(err.error.errorDetail);
        });

        this.selectedFilterList = [];
      }
    });
  }

  public openNewFilter(): void {
    this.openCockpitFilter(undefined, ComponentOpenMode.Create);
  }

  public openSelectedFilterList(): void {
    this.selectedFilterList.forEach((obj) => {
      if (!!obj.bidoPreferenceUserDTO) {
        if (StringUtils.isNullOrEmpty(obj.bidoPreferenceUserDTO.preferenceUserId)) {
          this.messageService.showWarningMessage(this.getTranslateKey('errorOnMissingstoreID'));
        } else {
          this.openCockpitFilter(obj.bidoPreferenceUserDTO.preferenceUserId, ComponentOpenMode.Read);
        }
      }
    });
  }


  private openCockpitFilter(objectId: string | undefined, openMode: ComponentOpenMode): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.MAI_COMPONENT_COCKPIT_FORM,
      openMode
    };
    if (!!objectId) {
      const prefId: BidoPreferenceUserDTOId = {
        preferenceUserId: objectId
      };
      data.objectId = this.serializationService.serialize(prefId);
    }
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

}
