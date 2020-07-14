import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { PageTocService } from '../../../../shared/components/component-sidebar/page-toc.service';
import { PageTocEntry } from '../../../../shared/components/component-sidebar/types/page-toc-entry.interface';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { Log4jConfigurationTextOutput } from '../../../../shared/types/api-output-types/administration-monitoring/log4j-configuration-text-output-dto.interface';
import { MonitoringOutput } from '../../../../shared/types/api-output-types/administration-monitoring/monitoring-output-dto.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { FileUtils } from '../../../../shared/utils/file-utils';

import { MonitoringFormService } from './monitoring-form.service';

@Component({
  selector: 'aw-monitoring-form',
  styleUrls: ['./monitoring-form.component.scss'],
  templateUrl: './monitoring-form.component.html'
})
export class MonitoringFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public static readonly SPRING_ANCHOR_ID: string = 'springAnchor';
  public static readonly DATABASE_ANCHOR_ID: string = 'databaseAnchor';
  public static readonly SERVICE_PERFORMANCE_ANCHOR_ID: string = 'servicePerformanceAnchor';
  public static readonly LIBRARIES_ANCHOR_ID: string = 'librariesAnchor';

  public readonly component: typeof MonitoringFormComponent;

  // Screen Data
  public monitoringData: MonitoringOutput;

  // Configuration List
  public levelList: LabelValue<string>[];

  // Loader
  public panelLoading: boolean;
  public resetStatLoader: boolean;
  public refreshStatLoader: boolean;
  public detailedStatLoader: boolean;

  public showLibrariesReportDialog: boolean;

  public dbURLString: string;

  // Table of content ***********************************************************

  @ViewChild(MonitoringFormComponent.SPRING_ANCHOR_ID)
  public springEltRef: ElementRef;

  @ViewChild(MonitoringFormComponent.DATABASE_ANCHOR_ID)
  public dbEltRef: ElementRef;

  @ViewChild(MonitoringFormComponent.SERVICE_PERFORMANCE_ANCHOR_ID)
  public performanceEltRef: ElementRef;

  @ViewChild(MonitoringFormComponent.LIBRARIES_ANCHOR_ID)
  public librariesEltRef: ElementRef;

  public toc: PageTocEntry[];

  // ****************************************************************************

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    pageTocService: PageTocService,
    public translateService: TranslateService,
    private readonly monitoringFormService: MonitoringFormService
  ) {
    super(
      ComponentOpenMode.Write,
      favoriteService,
      loaderService,
      messageService,
      serializationService,
      tabService,
      pageTocService
    );

    this.component = MonitoringFormComponent;

    super.registerPageTocEntryObservable();
  }

  public getComponentName(): string {
    return ComponentConstants.ADM_MONITORING;
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.setTableOfContent();
    this.init();
  }

  public refresh() {
    this.init();
  }

  /**********************************
   * SET TABLE OF CONTENT
   **********************************/
  private setTableOfContent() {
    const springKey = this.getTranslateKey('spring');
    const databaseKey = this.getTranslateKey('database');
    const performanceKey = this.getTranslateKey('servicePerformance');
    const librariesKey = this.getTranslateKey('libraries');
    this.translateService.get([springKey, databaseKey, performanceKey, librariesKey]).subscribe((results: string[]) => {
      const springLabel = !!results ? results[springKey] : 'Spring';
      const dbLabel = !!results ? results[databaseKey] : 'Database';
      const performanceLabel = !!results ? results[performanceKey] : 'Service Performance';
      const librariesLabel = !!results ? results[librariesKey] : 'Librairies';

      this.toc = [
        {
          id: 'springAnchor',
          anchor: this.springEltRef,
          label: springLabel
        },
        {
          id: 'databaseAnchor',
          anchor: this.dbEltRef,
          label: dbLabel
        },
        {
          id: 'servicePerformanceAnchor',
          anchor: this.performanceEltRef,
          label: performanceLabel
        },
        {
          id: 'librariesAnchor',
          anchor: this.librariesEltRef,
          label: librariesLabel
        }
      ];

      super.selectPageTocEntry(this.component.SPRING_ANCHOR_ID);
    });
  }

  /**********************************
   * INIT METHOD
   **********************************/
  private init() {
    this.monitoringData = {};
    this.setConfigurationList();
    this.loadMonitoringData();
  }

  /**********************************
   * SET CONFIGURATION SELECT BUTTON LIST
   **********************************/
  private setConfigurationList() {
    this.levelList = [
      {
        label: 'Debug',
        value: 'DEBUG'
      },
      {
        label: 'Info',
        value: 'INFO'
      },
      {
        label: 'Error',
        value: 'ERROR'
      }
    ];
  }

  /**********************************
   * LOAD SCREEN DATA
   **********************************/
  private loadMonitoringData() {
    this.panelLoading = true;
    this.monitoringFormService.adminMonitoring().subscribe(
      (data) => {
        this.monitoringData = data;

        if (!!this.monitoringData.dbUrl) {
          const endIndex = 40;
          if (this.monitoringData.dbUrl.length > endIndex) {
            this.dbURLString = `${this.monitoringData.dbUrl.substring(0, endIndex)}...`;
          } else {
            this.dbURLString = this.monitoringData.dbUrl;
          }
        }
        this.panelLoading = false;
      },
      (error) => {
        this.panelLoading = false;
      }
    );
  }

  public openReportDialog() {
    this.showLibrariesReportDialog = true;
  }

  /**********************************
   * LOAD STATS
   **********************************/
  public fetchStats(stat: number) {
    switch (stat) {
      case 0: {
        this.resetStatLoader = true;
        this.monitoringFormService.reset().subscribe(
          (data: string) => {
            this.monitoringData.serviceReport = data;
            this.resetStatLoader = false;
          },
          (error) => {
            this.resetStatLoader = false;
          }
        );
        break;
      }
      case 1: {
        this.refreshStatLoader = true;
        this.monitoringFormService.refresh().subscribe(
          (data: string) => {
            this.monitoringData.serviceReport = data;
            this.refreshStatLoader = false;
          },
          (error) => {
            this.refreshStatLoader = false;
          }
        );
        break;
      }
      default: {
        this.detailedStatLoader = true;
        this.monitoringFormService.detailed().subscribe(
          (data) => {
            FileUtils.downloadFile(data.content, data.fileName);
            this.detailedStatLoader = false;
          },
          (error) => {
            this.detailedStatLoader = false;
          }
        );
        break;
      }
    }
  }

  /**********************************
   * Change Log Level
   **********************************/
  public changeLogLevel(conf: Log4jConfigurationTextOutput) {
    this.monitoringFormService.changeLogLevel(conf).subscribe(
      () => {
        // TODO
      },
      (error) => {
        this.detailedStatLoader = false;
      }
    );
  }
}
