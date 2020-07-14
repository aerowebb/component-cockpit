import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Table } from 'primeng/table';

import { TableDataSource } from '../../../shared/components/table/table-data-source';
import { ComponentConstants } from '../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../shared/services/confirmation.service';
import { ExportService } from '../../../shared/services/export.service';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { TabService } from '../../../shared/services/tab.service';
import { BireModificationDTOId } from '../../../shared/types/api-types/bire-modification-dto-id.interface';
import { BireModificationDTO } from '../../../shared/types/api-types/bire-modification-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { PageComponent } from '../../../shared/types/page-component';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';

import { ModificationSearchService } from './modification-search.service';

interface ModificationRow {
  familyCode: string;
  structureType: string;
  modificationType: string;
  modificationNumber: string;
  modRevisionNumber: string;
  modificationDocumentUrl?: string;
  modificationTitle?: string;
}

@Component({
  selector: 'aw-modification-search',
  templateUrl: './modification-search.component.html',
  styleUrls: ['./modification-search.component.scss']
})
export class ModificationSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  public filteredRowsNb: number;
  public resultsTableSource: TableDataSource<BireModificationDTO>;
  public searchObject: BireModificationDTO;
  public familyCodeList: LabelValue<string>[];
  public selectedFamily: string | undefined;
  private readonly resultsTableExportName: string;
  public isLoading: boolean;

  @ViewChild('resultsContainerAnchor')
  public resultsContainerAnchor: ElementRef;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public modificationSearchService: ModificationSearchService,
    private readonly confirmationService: ConfirmationService,
    private readonly exportService: ExportService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.resultsTableExportName = 'modification-search-list';
    this.filteredRowsNb = 0;
    this.searchObject = {};
    this.searchObject = { familyCode: undefined };
    this.isLoading = false;

    this.initResultsTableDataSource();
  }

  public getComponentName(): string {
    return ComponentConstants.ENG_MODIFICATION_SEARCH;
  }

  public ngOnInit() {
    super.ngOnInit();

    this.displayComponentContext('global.search', true);

    this.loadDropDownList();
  }

  private loadDropDownList(): void {
    this.modificationSearchService.findBireFamily().subscribe(
      (results) => {
        this.selectedFamily = undefined;
        this.familyCodeList = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetBireFamily'));
      }
    );
  }

  public resetSearchCriteria(): void {
    this.searchObject = {};
    this.selectedFamily = undefined;
  }

  public openNewModification(): void {
    this.openModificationForm(undefined, ComponentOpenMode.Create);
  }

  public openModification(modification: BireModificationDTO): void {
    if (modification && modification.familyCode) {
      const selectedObjectId: BireModificationDTO = {
        familyCode: modification.familyCode,
        structureType: modification.structureType,
        modificationType: modification.modificationType,
        modificationNumber: modification.modificationNumber,
        modificationRevisionNumber: modification.modificationRevisionNumber
      };
      this.openModificationForm(selectedObjectId, ComponentOpenMode.Read);
    }
  }

  /* Open modification form for selected rows */
  public openSelectedModification(): void {
    this.resultsTableSource.dataSelection.forEach((modification) => {
      if (modification && modification.familyCode) {
        const selectedObjectId: BireModificationDTO = {
          familyCode: modification.familyCode,
          structureType: modification.structureType,
          modificationType: modification.modificationType,
          modificationNumber: modification.modificationNumber,
          modificationRevisionNumber: modification.modificationRevisionNumber
        };
        this.openModificationForm(selectedObjectId, ComponentOpenMode.Read);
      }
    });
  }

  /* Delete selected modification */
  public deleteSelectedModification(): void {
    if (this.resultsTableSource.hasDataSelection) {
      const partialMessageKey =
        this.resultsTableSource.dataSelectionCount === 1
          ? 'confirmDeleteSelectedModification'
          : 'confirmDeleteSelectedModifications';
      this.confirmationService.confirmDelete({
        messageKey: this.getTranslateKey(partialMessageKey),
        accept: () => {
          const selectedBireModificationDTOId: BireModificationDTOId[] = this.resultsTableSource.dataSelection
            .filter((modification) => modification && modification.familyCode)
            .map((modification) => {
              return {
                modificationType: modification.modificationType,
                modificationNumber: modification.modificationNumber,
                modificationRevisionNumber: modification.modificationRevisionNumber,
                familyCode: modification.familyCode,
                structureType: modification.structureType
              };
            });

          this.modificationSearchService.removeBireModification(selectedBireModificationDTOId).subscribe(
            (result) => {
              this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteModification'));
            },
            () => {
              this.messageService.showErrorMessage(this.getTranslateKey('errorOnDeleteEvolution'));
            }
          );

          this.refreshTable();
        }
      });
    }
  }

  /* Refresh table */
  private refreshTable(): void {
    this.resultsTableSource.deleteData(this.resultsTableSource.dataSelection);
    this.resultsTableSource.dataSelection = [];
    this.filteredRowsNb = this.resultsTableSource.dataCount;
  }

  public resetResultsTable(table: Table): void {
    table.reset();
    table.filters = {};
  }

  /* Search modification */
  public search(): void {
    this.resultsTableSource.setData([]);
    this.loadModifications();
  }

  private loadModifications(): void {
    this.isLoading = true;
    this.modificationSearchService.searchModificationList(this.searchObject).subscribe(
      (results) => {
        this.isLoading = false;
        if (results) {
          this.resultsTableSource.setData(results.list);
          this.filteredRowsNb = this.resultsTableSource.dataCount;
        }
      },
      () => {
        this.isLoading = false;
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetModificationResults'));
      }
    );
  }

  public onChange(event: string): void {
    if (!!event) {
      const familys: string[] = event.split('-');
      this.searchObject.familyCode = familys[0];
      this.searchObject.structureType = familys[1];
    } else {
      this.searchObject.familyCode = undefined;
      this.searchObject.structureType = undefined;
    }
  }

  // tslint:disable-next-line:no-any
  public onFilter(event: any): void {
    this.filteredRowsNb = event.filteredValue.length;
  }

  private openModificationForm(objectId: BireModificationDTO | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.ModificationFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.ENG_MODIFICATION_FORM,
      objectId: objectId ? this.serializationService.serialize(objectId) : undefined,
      openMode
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public exportTable(): void {
    if (!!this.componentData) {
      const tableList: ModificationRow[] = this.resultsTableSource.dataSrc.map((modRow) => {
        const row: ModificationRow = {
          familyCode: modRow.familyCode as string,
          structureType: modRow.structureType as string,
          modificationType: modRow.modificationType as string,
          modificationNumber: modRow.modificationNumber as string,
          modRevisionNumber: modRow.modificationRevisionNumber as string,
          modificationDocumentUrl: modRow.modificationDocumentUrl,
          modificationTitle: modRow.modificationTitle
        };

        return row;
      });
      this.exportService.toExcel(tableList, this.resultsTableExportName, this.componentData.componentId);
    } else {
      super.throwUnboundLocalError('exportTable', 'this.componentData');
    }
  }

  private initResultsTableDataSource(): void {
    this.resultsTableSource = new TableDataSource<BireModificationDTO>({
      allowMultiSelect: true,
      columns: [
        { field: 'familyCode', translateKey: this.getTranslateKey('familyCode'), width: '15%' },
        { field: 'structureType', translateKey: this.getTranslateKey('structureType'), width: '10%' },
        { field: 'modificationType', translateKey: this.getTranslateKey('modificationType'), width: '15%' },
        { field: 'modificationNumber', translateKey: this.getTranslateKey('modificationNumber'), width: '15%' },
        {
          field: 'modificationRevisionNumber',
          translateKey: this.getTranslateKey('modificationRevisionNumber'),
          width: '13%'
        },
        {
          field: 'modificationDocumentUrl',
          translateKey: this.getTranslateKey('modificationDocumentUrl'),
          width: '18%'
        },
        { field: 'modificationTitle', translateKey: this.getTranslateKey('modificationTitle'), width: '15%' }
      ],
      data: []
    });
  }
}
