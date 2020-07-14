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

import { EventSymptomService } from './event-symptom.service';

@Component({
  selector: 'aw-event-symptom',
  templateUrl: './event-symptom.component.html'
})
export class EventSymptomComponent extends DynamicCatalog implements OnInit {
  public eventSymptomTableDataSource: TableDataSource<BidoExtensionDTO>;

  public constructor(
    private readonly messageService: MessageService,
    private readonly serializationService: SerializationService,
    private readonly tabService: TabService,
    private readonly eventSymptomService: EventSymptomService,
    private readonly confirmationService: ConfirmationService,
    catalogService: CatalogService
  ) {
    super(catalogService, ComponentOpenMode.Write);

    this.init();

    this.loadEventSymptomTableData();
  }

  public init(): void {
    this.eventSymptomTableDataSource = new TableDataSource({
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
    return 'EventSymptomComponent';
  }

  public refresh(): void {
    this.init();
    this.loadEventSymptomTableData();
    this.eventSymptomTableDataSource.dataSelection = [];
  }

  public create(): void {
    this.openEventSymptom(undefined, ComponentOpenMode.Create);
  }

  public openEventSymptom(object: BidoExtensionDTO | undefined, openMode: ComponentOpenMode): void {
    if (!!object) {
      const labelKey = 'transaction.EventSymptomFormComponent';
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: 'EventSymptomFormComponent',
        objectId: this.serializationService.serialize(object),
        openMode
      };
      this.tabService.open(this.tabService.create(data, labelKey, true));
    } else {
      const labelKey = 'transaction.EventSymptomFormComponent';
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: 'EventSymptomFormComponent',
        objectId: undefined,
        openMode
      };
      this.tabService.open(this.tabService.create(data, labelKey, true));
    }
  }

  public loadEventSymptomTableData(): void {
    this.eventSymptomTableDataSource.setData([]);
    this.eventSymptomService.loadEventSymptomList().subscribe((results) => {
      results.list.forEach((result) => {
        if (result.extensionType === 'S') {
          this.eventSymptomTableDataSource.addData([result]);
        }
      });
    });
  }

  public viewSelectedEventSymptom(): void {
    this.eventSymptomTableDataSource.dataSelection.forEach((symptom) => {
      if (symptom) {
        if (symptom.extensionCode && symptom.extensionCode.length > 0) {
          this.openEventSymptom(symptom, ComponentOpenMode.Read);
        } else {
          this.messageService.showErrorMessage('errorOnMissingExtensionCode');
        }
      }
    });
  }

  public deleteSelectedEventSymptom(): void {
    const partialMessageKey = 'global.deleteConfirmationMsg';
    this.confirmationService.confirmDelete({
      messageKey: partialMessageKey,
      accept: () => {
        const ids: BidoExtensionDTOId[] = [];
        let id: BidoExtensionDTOId;
        this.eventSymptomTableDataSource.dataSelection.forEach((symptom) => {
          if (!!symptom.extensionCode) {
            id = {
              extensionCode: symptom.extensionCode
            };
            ids.push(id);
          } else {
            super.throwUnboundLocalError('deleteSelectedEventSymptom', 'symptom.extensionCode');
          }
        });
        this.eventSymptomService.deleteEventSymptoms(ids).subscribe(
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
