import { Component, OnInit } from '@angular/core';

import { TableDataSource } from '../../../../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../../../shared/services/confirmation.service';
import { MessageService } from '../../../../../../shared/services/message.service';
import { SerializationService } from '../../../../../../shared/services/serialization.service';
import { TabService } from '../../../../../../shared/services/tab.service';
import { BidoExtensionDTOId } from '../../../../../../shared/types/api-types/bido-extension-dto-id.interface';
import { BidoExtensionDTO } from '../../../../../../shared/types/api-types/bido-extension-dto.interface';
import { PageComponentData } from '../../../../../../shared/types/page-component-data.interface';
import { CatalogService } from '../../../catalog.service';
import { DynamicCatalog } from '../../../types/dynamic-catalog.interface';

import { EventContextService } from './event-context.service';

@Component({
  selector: 'aw-event-context',
  templateUrl: './event-context.component.html'
})
export class EventContextComponent extends DynamicCatalog implements OnInit {
  public eventContextTableDataSource: TableDataSource<BidoExtensionDTO>;

  public constructor(
    private readonly messageService: MessageService,
    private readonly serializationService: SerializationService,
    private readonly tabService: TabService,
    // private readonly exportService: ExportService,
    private readonly eventContextService: EventContextService,
    private readonly confirmationService: ConfirmationService,
    catalogService: CatalogService
  ) {
    super(catalogService, ComponentOpenMode.Write);

    this.init();

    this.loadEventContextTableData();
  }

  public init(): void {
    this.eventContextTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'extensionCode',
          translateKey: this.getTranslateKey('extensionCode')
        },
        {
          field: 'extensionName',
          translateKey: this.getTranslateKey('extensionName')
        }
      ],
      data: []
    });
  }

  public ngOnInit() {
    // super.ngOnInit();
    // this.displayComponentContext('global.search', true);
  }

  public getComponentName(): string {
    return 'EventContextComponent';
  }

  public refresh(): void {
    this.init();
    this.loadEventContextTableData();
  }

  public create(): void {
    this.openEventContext(undefined, ComponentOpenMode.Create);
  }

  public openEventContext(object: BidoExtensionDTO | undefined, openMode: ComponentOpenMode): void {
    if (!!object) {
      const labelKey = 'transaction.EventContextFormComponent';
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: 'EventContextFormComponent',
        objectId: this.serializationService.serialize(object),
        openMode
      };
      this.tabService.open(this.tabService.create(data, labelKey, true));
    } else {
      const labelKey = 'transaction.EventContextFormComponent';
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: 'EventContextFormComponent',
        objectId: undefined,
        openMode
      };
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public loadEventContextTableData(): void {
    this.eventContextTableDataSource.setData([]);
    this.eventContextService.loadEventContextList().subscribe((results) => {
      results.list.forEach((result) => {
        if (result.extensionType === 'C') {
          this.eventContextTableDataSource.addData([result]);
        }
      });
    });
  }

  public viewSelectedEventContext(): void {
    this.eventContextTableDataSource.dataSelection.forEach((context) => {
      if (context) {
        if (context.extensionCode && context.extensionCode.length > 0) {
          this.openEventContext(context, ComponentOpenMode.Read);
        } else {
          this.messageService.showErrorMessage('errorOnMissingExtensionCode');
        }
      }
    });
  }

  public deleteSelectedEventContext(): void {
    const partialMessageKey = 'global.deleteConfirmationMsg';
    this.confirmationService.confirmDelete({
      messageKey: partialMessageKey,
      accept: () => {
        const ids: BidoExtensionDTOId[] = [];
        let id: BidoExtensionDTOId;
        this.eventContextTableDataSource.dataSelection.forEach((context) => {
          if (!!context.extensionCode) {
            id = {
              extensionCode: context.extensionCode
            };
            ids.push(id);
          } else {
            super.throwUnboundLocalError('deleteSelectedEventContext', 'context.extensionCode');
          }
        });
        this.eventContextService.deleteEventContexts(ids).subscribe(
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
