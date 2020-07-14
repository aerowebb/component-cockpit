import { Component, OnInit } from '@angular/core';

import { TableDataSource } from '../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../shared/services/confirmation.service';
import { ExportService } from '../../../shared/services/export.service';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { TabService } from '../../../shared/services/tab.service';
import { BidoSubscriptionDTO } from '../../../shared/types/api-types/bido-subscription-dto.interface';
import { PageComponent } from '../../../shared/types/page-component';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';

import { EventSubscriptionService } from './event-subscription.service';

interface DTOForEventSubscriptionExcelExport {
  subscriptionName?: string;
  eventType?: string;
  familyVariantCode?: string;
  operatorCode?: string;
  chapter?: string;
  eventPriority?: string;
  newEventsOnly?: boolean;
  doNotNotifyOnForms?: boolean;
}

@Component({
  selector: 'aw-event-subscription',
  templateUrl: './event-subscription.component.html'
})
export class EventSubscriptionComponent extends PageComponent<PageComponentData> implements OnInit {
  public filteredRowsNb: number;
  public isReadOnlyForm: boolean;

  public evtSubscriptionsTableDataSource: TableDataSource<BidoSubscriptionDTO>;
  public currentEventSubscription: BidoSubscriptionDTO | undefined;
  public currentEventSubscriptionIndex: number | undefined;

  public dataForEventSubscriptionExcelExport: DTOForEventSubscriptionExcelExport[];

  // private readonly resultsTableExportName: string;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public readonly exportService: ExportService,
    private readonly eventSubscriptionService: EventSubscriptionService,
    private readonly confirmationService: ConfirmationService
  ) {
    super(ComponentOpenMode.Read, favoriteService, loaderService, messageService, serializationService, tabService);

    this.filteredRowsNb = 0;
    this.isReadOnlyForm = false;

    // this.resultsTableExportName = 'Subscriptions-List';

    this.currentEventSubscription = undefined;
    this.currentEventSubscriptionIndex = undefined;

    this.dataForEventSubscriptionExcelExport = [];

    this.loadEventSubscriptionData();
    this.initEvtSubscriptionsTableDataSource();
  }

  public ngOnInit() {
    super.ngOnInit();

    this.displayComponentContext('global.search', true);
  }

  private initEvtSubscriptionsTableDataSource(): void {
    this.evtSubscriptionsTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'subscriptionName',
          translateKey: this.getTranslateKey('subscriptionName'),
          width: '20%'
        },
        {
          field: 'eventType',
          translateKey: this.getTranslateKey('eventType'),
          width: '20%'
        },
        {
          field: 'familyVariantCode',
          translateKey: this.getTranslateKey('familyVariantCode'),
          width: '10%'
        },
        {
          field: 'operatorCode',
          translateKey: this.getTranslateKey('operatorCode'),
          width: '10%'
        },
        {
          field: 'chapter',
          translateKey: this.getTranslateKey('chapter'),
          width: '10%'
        },
        {
          field: 'eventPriority',
          translateKey: this.getTranslateKey('eventPriority'),
          width: '10%'
        },
        {
          field: 'newEventsOnly',
          translateKey: this.getTranslateKey('newEventsOnly'),
          width: '10%'
        },
        {
          field: 'doNotNotifyOnForms',
          translateKey: this.getTranslateKey('doNotNotifyOnForms'),
          width: '10%'
        },
      ],
      data: []
    });
  }

  public getComponentName(): string {
    return 'EventSubscriptionComponent';
  }

  // tslint:disable-next-line:no-any
  public onFilter(event: any): void {
    this.filteredRowsNb = event.filteredValue.length;
  }

  public loadEventSubscriptionData(): void {
    this.eventSubscriptionService.loadEventSubscriptionTableData().subscribe((results) => {
      this.evtSubscriptionsTableDataSource.setData(results.list);
      this.filteredRowsNb = this.evtSubscriptionsTableDataSource.dataSelectionCount;
      this.evtSubscriptionsTableDataSource.update();
    });
  }

  public refresh(): void {
    this.loadEventSubscriptionData();
    this.evtSubscriptionsTableDataSource.dataSelection = [];
  }

  private openEventSubscription(object: BidoSubscriptionDTO | undefined, openMode: ComponentOpenMode): void {
    if (!!object) {
      const labelKey = 'transaction.EventSubscriptonFormComponent';
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: 'EventSubscriptonFormComponent',
        objectId: this.serializationService.serialize(object),
        openMode
      };
      this.tabService.open(this.tabService.create(data, labelKey, true));
    } else {
      const labelKey = 'transaction.EventSubscriptonFormComponent';
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: 'EventSubscriptonFormComponent',
        objectId: undefined,
        openMode
      };
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  // public exportTable(): void {
  //   this.eventSubscriptionsTable.list.forEach((subscription) => {
  //     const data: DTOForEventSubscriptionExcelExport = {
  //       subscriptionName: subscription.subscriptionName,
  //       eventType: subscription.eventType,
  //       familyVariantCode: subscription.familyVariantCode,
  //       operatorCode: subscription.operatorCode,
  //       chapter: subscription.chapter,
  //       eventPriority: subscription.eventPriority,
  //       newEventsOnly: subscription.newEventsOnly,
  //       doNotNotifyOnForms: subscription.doNotNotifyOnForms
  //     };
  //     this.dataForEventSubscriptionExcelExport.push(data);
  //   });
  //   if (!!this.componentData) {
  //     this.exportService.toExcel(
  //       this.dataForEventSubscriptionExcelExport,
  //       this.resultsTableExportName,
  //       this.componentData.componentId
  //     );
  //   } else {
  //     super.throwUnboundLocalError('exportTable', 'this.componentData');
  //   }
  // }

  public create(): void {
    this.openEventSubscription(undefined, ComponentOpenMode.Create);
  }

  public viewSelectedEventSubscription(): void {
    this.evtSubscriptionsTableDataSource.dataSelection.forEach((subscription) => {
      if (subscription) {
        if (subscription.subscriptionName && subscription.subscriptionName.length > 0) {
          this.openEventSubscription(subscription, ComponentOpenMode.Read);
        } else {
          this.messageService.showErrorMessage('errorOnMissingSubscriptionName');
        }
      }
    });
  }

  public deleteSelectedEventSubscription(): void {
    const partialMessageKey = 'global.deleteConfirmationMsg';
    this.confirmationService.confirmDelete({
      messageKey: partialMessageKey,
      accept: () => {
        const ids: number[] = [];
        this.evtSubscriptionsTableDataSource.dataSelection.forEach((subscription) => {
          if (!!subscription.subscriptionId) {
            ids.push(subscription.subscriptionId);
          } else {
            super.throwUnboundLocalError('deleteSelectedEventSubscription', 'subscription.subscriptionId');
          }
        });
        this.eventSubscriptionService.deleteSubscriptions(ids).subscribe(
          (result) => {
            this.messageService.showSuccessMessage('global.deleteSuccessMsg');
            this.refresh();
          },
          () => {
            this.messageService.showErrorMessage('global.deleteErrorMsg');
          }
        );
      }
    });
  }
}
