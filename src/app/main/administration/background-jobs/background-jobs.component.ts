import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { TableDataSource } from '../../../shared/components/table/table-data-source';
import { ComponentConstants } from '../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { DateService } from '../../../shared/services/date.service';
import { ExportService } from '../../../shared/services/export.service';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { TabService } from '../../../shared/services/tab.service';
import { PageComponent } from '../../../shared/types/page-component';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';

import { BackgroundJobsService } from './background-jobs.service';

interface BackgroundJobsRow {
  Name?: string;
  Author?: string;
  StartTime?: string;
  Parameters?: string;
}

@Component({
  selector: 'aw-background-jobs',
  templateUrl: './background-jobs.component.html'
})
export class BackgroundJobsComponent extends PageComponent<PageComponentData> implements OnInit {
  private static readonly tableExportName: string = 'Background-Jobs-list';
  public filteredRowsNb: number;
  public backgroundJobsTableDataSource: TableDataSource<BackgroundJobsRow>;
  public isLoading: boolean;

  @ViewChild('resultsContainerAnchor')
  public resultsContainerAnchor: ElementRef;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly backgroundJobsService: BackgroundJobsService,
    private readonly dateService: DateService,
    private readonly exportService: ExportService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
    this.filteredRowsNb = 0;

    this.initBackgroundJobsTableDataSource();
    this.isLoading = false;
  }

  public getComponentName(): string {
    return ComponentConstants.ADM_BACKGROUND_JOBS;
  }

  public ngOnInit(): void {
    super.ngOnInit();
    super.scrollToAnchor(this.resultsContainerAnchor);
    this.getBackgroundJobs();
  }

  public refresh() {
    this.getBackgroundJobs();
  }

  // tslint:disable-next-line:no-any
  public onFilter(event: any): void {
    this.filteredRowsNb = event.filteredValue.length;
  }

  public exportTable(): void {
    if (!!this.componentData) {
      this.exportService.toExcel(
        this.backgroundJobsTableDataSource.dataSrc,
        BackgroundJobsComponent.tableExportName,
        this.componentData.componentId
      );
    } else {
      super.throwUnboundLocalError('exportTable', 'this.componentData');
    }
  }

  private initBackgroundJobsTableDataSource(): void {
    this.backgroundJobsTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'Name',
          translateKey: this.getTranslateKey('Name')
        },
        {
          field: 'Author',
          translateKey: this.getTranslateKey('Author')
        },
        {
          field: 'StartTime',
          translateKey: this.getTranslateKey('StartTime')
        },
        {
          field: 'Parameters',
          translateKey: this.getTranslateKey('Parameters')
        }
      ],
      data: []
    });
  }

  private getBackgroundJobs(): void {
    let backgroundJobsRow: BackgroundJobsRow[] = [];
    this.isLoading = true;
    this.backgroundJobsService.getBackgroundJobs().subscribe((results) => {
      backgroundJobsRow = results.map((row) => {
        const jobRow: BackgroundJobsRow = {
          Name: !!row.jobName ? row.jobName.substring(0, row.jobName.lastIndexOf('_')) : '',
          Author: row.author,
          StartTime: !!row.startTime ? this.dateService.dateWithHourMinSecToString(row.startTime) : '',
          Parameters: row.parameters
        };

        return jobRow;
      });
      this.isLoading = false;
      this.backgroundJobsTableDataSource.setData(backgroundJobsRow);
      this.backgroundJobsTableDataSource.update();
      this.filteredRowsNb = this.backgroundJobsTableDataSource.dataCount;
    });
  }
}
