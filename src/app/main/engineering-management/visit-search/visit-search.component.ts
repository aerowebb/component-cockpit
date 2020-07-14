import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';

import { TableDataSource } from '../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../shared/services/confirmation.service';
import { ExportService } from '../../../shared/services/export.service';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { TabService } from '../../../shared/services/tab.service';
import { BireTaskDTOId } from '../../../shared/types/api-types/bire-task-dto-id.interface';
import { BireTaskDTO } from '../../../shared/types/api-types/bire-task-dto.interface';
import { PageComponent } from '../../../shared/types/page-component';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';

import { VisitSearchService } from './visit-search.service';

interface VisitDataExport {
  taskCode?: string;
  taskVersion?: string;
  taskDesignation?: string;
}

@Component({
  selector: 'aw-visit-search',
  templateUrl: './visit-search.component.html'
})
export class VisitSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  public filteredRowsNb: number;
  public visitTableDataSource: TableDataSource<BireTaskDTO>;
  public searchObject: BireTaskDTO;

  public isLoading: boolean = false;

  private readonly resultsTableExportName: string;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly visitSearchService: VisitSearchService,
    private readonly exportService: ExportService,
    private readonly confirmationService: ConfirmationService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.resultsTableExportName = 'visit-list';

    this.filteredRowsNb = 0;
    this.searchObject = {};
    this.initVisitTableDataSource();
  }

  public getComponentName(): string {
    return 'VisitSearchComponent';
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.displayComponentContext('global.search', true);
  }

  private initVisitTableDataSource(): void {
    this.visitTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'taskCode',
          translateKey: this.getTranslateKey('taskCode'),
          width: '30%'
        },
        {
          field: 'taskVersion',
          translateKey: this.getTranslateKey('taskVersion'),
          width: '15%'
        },
        {
          field: 'taskDesignation',
          translateKey: this.getTranslateKey('taskDesignation'),
          width: '55%'
        }
      ],
      data: []
    });
  }

  public deleteVisits(): void {
    const partialMessageKey =
      this.visitTableDataSource.dataSelectionCount > 1 ? 'confirmDeleteSelectedVisits' : 'confirmDeleteSelectedVisit';

    const visits = new Array<BireTaskDTOId>();
    this.visitTableDataSource.dataSelection.forEach((visit) => {
      if (!!visit && !!visit.taskCode && !!visit.taskVersion) {
        const visitId: BireTaskDTOId = {
          taskCode: visit.taskCode,
          taskVersion: visit.taskVersion
        };
        visits.push(visitId);
      } else {
        super.throwUnboundLocalError('deleteVisits', 'visit && visit.taskCode && visit.taskVersion');
      }
    });
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.visitSearchService.removeBireTask(visits).subscribe(
          (result) => {
            this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteVisit'));
            this.visitTableDataSource.dataSelection = [];
            this.search();
          },
          (error) => {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnDeleteVisit'));
          }
        );
      }
    });
  }

  public exportTable(): void {
    const dataToExport: VisitDataExport[] = [];
    this.visitTableDataSource.dataSrc.forEach((visit) => {
      const visitDataExport: VisitDataExport = {
        taskCode: visit.taskCode,
        taskVersion: visit.taskVersion,
        taskDesignation: visit.taskDesignation
      };
      dataToExport.push(visitDataExport);
    });
    this.exportService.toExcel(dataToExport, this.resultsTableExportName, this.componentData.componentId);
  }

  public openNewVisit(): void {
    this.openVisit(undefined, ComponentOpenMode.Create);
  }

  public openVisitLink(visit: BireTaskDTO): void {
    if (!!visit) {
      if (!!visit.taskCode && visit.taskCode.trim().length > 0) {
        this.openVisit(visit, ComponentOpenMode.Read);
      } else {
        this.messageService.showWarningMessage(this.getTranslateKey('errorOnMissingTaskCode'));
        super.throwUnboundLocalError('openSelectedVisits', 'visit.taskCode');
      }
    } else {
      super.throwUnboundLocalError('openSelectedVisits', 'visit');
    }
  }

  public openSelectedVisits(): void {
    this.visitTableDataSource.dataSelection.forEach((visit) => {
      if (!!visit) {
        if (!!visit.taskCode && visit.taskCode.trim().length > 0) {
          this.openVisit(visit, ComponentOpenMode.Read);
        } else {
          this.messageService.showWarningMessage(this.getTranslateKey('errorOnMissingTaskCode'));
          super.throwUnboundLocalError('openSelectedVisits', 'visit.taskCode');
        }
      } else {
        super.throwUnboundLocalError('openSelectedVisits', 'visit');
      }
    });
  }

  public resetResultsTable(table: Table): void {
    table.reset();
    table.filters = {};
  }

  public resetSearchCriteria(): void {
    this.searchObject = {};
  }

  public search(): void {
    if (!!this.searchObject) {
      this.isLoading = true;
      this.visitSearchService.findBireVisitsByCriteria(this.searchObject).subscribe(
        (results) => {
          if (results) {
            this.visitTableDataSource.dataSelection = [];
            this.isLoading = false;
            this.visitTableDataSource.setData(results.list);
            this.visitTableDataSource.update();
            this.filteredRowsNb = this.visitTableDataSource.dataCount;
          }
        },
        () => {
          this.isLoading = false;
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetResults'));
        }
      );
    } else {
      super.throwUnboundLocalError('search', 'this.searchObject');
    }
  }

  // tslint:disable-next-line:no-any
  public onFilter(event: any): void {
    this.filteredRowsNb = event.filteredValue.length;
  }

  private openVisit(object: BireTaskDTO | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.VisitFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'VisitFormComponent',
      objectId: this.serializationService.serialize(object),
      openMode
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }
}
