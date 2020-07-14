import { Component, OnInit } from '@angular/core';

import { ColumnAlignment, TableDataSource } from '../../../../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../../../shared/services/confirmation.service';
import { MessageService } from '../../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../../shared/services/properties.service';
import { SaveCatalogInput } from '../../../../../../shared/types/api-input-types/catalog/save-catalog-input.interface';
import { BidoNotificationTypeDTO } from '../../../../../../shared/types/api-types/bido-notification-type-dto.interface';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
import { LabelValueUtils } from '../../../../../../shared/utils/label-value-utils';
import { CatalogService } from '../../../catalog.service';
import { DynamicCatalog } from '../../../types/dynamic-catalog.interface';

import { EventTypeService } from './event-type.service';

interface EventTypeDTO {
  typeCode?: string;
  typeDescription?: string;
  typeCategory?: string;
  criticality?: boolean;
  isRemovedEnabled?: boolean;
  isUpdateEnabled?: boolean;
  isDisplayEnabled?: boolean;
  bidoNotificationTypeDTO?: BidoNotificationTypeDTO;
}

@Component({
  selector: 'aw-event-type',
  templateUrl: './event-type.component.html'
})
export class EventTypeComponent extends DynamicCatalog implements OnInit {
  public filteredRowsNb: number;

  public eventTypesTableDataSource: TableDataSource<EventTypeDTO>;
  public currentEventType: EventTypeDTO | undefined;
  public currentEventTypeIndex: number | undefined;

  public typeCategories: LabelValue<string>[];

  // Event Type Form
  public showEventTypeForm: boolean;
  public isNewEventType: boolean;
  public eventTypesAddedList: BidoNotificationTypeDTO[];
  public eventTypesUpdatedList: BidoNotificationTypeDTO[];

  public constructor(
    private readonly messageService: MessageService,
    private readonly eventTypeService: EventTypeService,
    private readonly confirmationService: ConfirmationService,
    private readonly propertiesService: PropertiesService,
    catalogService: CatalogService
  ) {
    super(catalogService, ComponentOpenMode.Read);

    this.eventTypesTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'typeCode',
          translateKey: this.getTranslateKey('typeCode')
        },
        {
          field: 'typeCategory',
          translateKey: this.getTranslateKey('typeCategory')
        },
        {
          field: 'criticality',
          translateKey: this.getTranslateKey('criticality'),
          alignment: ColumnAlignment.CENTER
        },
        {
          field: 'typeDescription',
          translateKey: this.getTranslateKey('typeDescription')
        }
      ],
      data: []
    });

    this.currentEventType = undefined;
    this.currentEventTypeIndex = undefined;

    this.typeCategories = [];

    this.showEventTypeForm = false;
    this.isNewEventType = false;
    this.eventTypesAddedList = [];
    this.eventTypesUpdatedList = [];

    this.loadEventTypeTableData();
  }

  public ngOnInit() {
    // super.ngOnInit();
    // this.displayComponentContext('global.search', true);
  }

  public getComponentName(): string {
    return 'EventTypeComponent';
  }

  public loadEventTypeTableData(): void {
    this.eventTypesTableDataSource.setData([]);
    this.eventTypeService.loadEventTypeTableData().subscribe((results) => {
      this.propertiesService.getValue('getEventCategoryMap').subscribe((result) => {
        this.typeCategories = result || [];

        results.forEach((res) => {
          if (!!res.bidoNotificationTypeDTO) {
            const eventType: EventTypeDTO = {
              typeCode: res.bidoNotificationTypeDTO.typeCode,
              typeDescription: res.bidoNotificationTypeDTO.typeDescription,
              typeCategory: res.bidoNotificationTypeDTO.typeCategory,
              criticality: res.bidoNotificationTypeDTO.criticality,
              isRemovedEnabled: res.isRemovedEnabled,
              isUpdateEnabled: res.isUpdateEnabled,
              isDisplayEnabled: res.isDisplayEnabled,
              bidoNotificationTypeDTO: res.bidoNotificationTypeDTO
            };

            this.eventTypesTableDataSource.addData([eventType]);
          } else {
            super.throwUnboundLocalError('loadEventTypeTableData', 'res.bidoNotificationTypeDTO');
          }
        });
        this.eventTypesTableDataSource.dataSrc.forEach((element) => {
          LabelValueUtils.stringValueToLabel<EventTypeDTO>(element, 'typeCategory', this.typeCategories);
        });
      });
    });
  }

  public refresh(): void {
    this.eventTypesTableDataSource.dataSelection = [];
    this.eventTypesAddedList = [];
    this.eventTypesUpdatedList = [];
    this.loadEventTypeTableData();
  }

  public save(): void {
    const input: SaveCatalogInput = {
      bidoNotificationTypeDTOAddedList: this.eventTypesAddedList,
      bidoNotificationTypeDTOUpdatedList: this.eventTypesUpdatedList
    };
    this.eventTypeService.saveCatalog(input).subscribe(
      (_result) => {
        this.messageService.showSuccessMessage('global.successOnSave');
        this.refresh();
      },
      (_error) => {
        this.messageService.showErrorMessage('global.errorOnSave');
      }
    );
  }

  /******************
   * Event Type Popup
   ******************/

  public addEventType(): void {
    this.showEventTypeForm = true;
    this.isNewEventType = true;
    this.currentEventType = {};
  }

  public editSelectedEventType(): void {
    this.showEventTypeForm = true;
    this.isNewEventType = false;
    const eventType = { ...this.eventTypesTableDataSource.dataSelection[0] };
    const categories = this.typeCategories.filter((c) => c.label === eventType.typeCategory);
    eventType.typeCategory = categories[0].value;
    this.currentEventType = eventType;
    this.currentEventTypeIndex = this.eventTypesTableDataSource.dataSrc.findIndex(
      (type) => type === this.eventTypesTableDataSource.dataSelection[0]
    );
  }

  public disablePropertyTypeDeleteButton(): boolean {
    let result: boolean;

    if (this.eventTypesTableDataSource.hasDataSelection) {
      result = true;
    } else {
      const eventTypes: BidoNotificationTypeDTO[] = this.eventTypesTableDataSource.dataSelection.filter(
        (type) => !type.isRemovedEnabled
      );
      result = eventTypes.length === 0 ? false : true;
    }

    return result;
  }

  public deleteSelectedEventType(): void {
    const partialMessageKey = 'global.deleteConfirmationMsg';
    this.eventTypesTableDataSource.dataSelection.forEach((selectedType) => {
      const inAddedList = this.eventTypesAddedList.filter((type) => type.typeCode === selectedType.typeCode);
      const inUpdatedList = this.eventTypesUpdatedList.filter((type) => type.typeCode === selectedType.typeCode);

      if (inUpdatedList.length !== 0) {
        // in updated list
        this.confirmationService.confirmDelete({
          messageKey: partialMessageKey,
          accept: () => {
            this.eventTypesUpdatedList = this.eventTypesUpdatedList.filter(
              (type) => type.typeCode !== selectedType.typeCode
            );
            this.eventTypeService.deleteEventType(this.eventTypesTableDataSource.dataSelection).subscribe((result) => {
              this.messageService.showSuccessMessage('global.deleteSuccessMsg');
              this.loadEventTypeTableData();
              this.eventTypesTableDataSource.dataSelection = [];
            });
          }
        });
      } else if (inAddedList.length !== 0) {
        // in added list
        this.confirmationService.confirmDelete({
          messageKey: partialMessageKey,
          accept: () => {
            this.eventTypesAddedList = this.eventTypesAddedList.filter(
              (element) => element.typeCode !== selectedType.typeCode
            );
            this.eventTypesTableDataSource.dataSelection = this.eventTypesTableDataSource.dataSelection.filter(
              (type) => type.typeCode !== selectedType.typeCode
            );
            this.eventTypesTableDataSource.setData(
              this.eventTypesTableDataSource.dataSrc.filter((type) => type.typeCode !== selectedType.typeCode)
            );
            this.eventTypesTableDataSource.dataSelection = [];
            this.messageService.showSuccessMessage('global.deleteSuccessMsg');
          }
        });
      } else if (inAddedList.length === 0 && inUpdatedList.length === 0) {
        this.confirmationService.confirmDelete({
          messageKey: partialMessageKey,
          accept: () => {
            this.eventTypeService.deleteEventType(this.eventTypesTableDataSource.dataSelection).subscribe((result) => {
              this.eventTypesTableDataSource.dataSelection = [];
              this.messageService.showSuccessMessage('global.deleteSuccessMsg');
              this.refresh();
            });
          }
        });
      }
    });
    this.eventTypesTableDataSource.dataSelection.forEach((selectedType) => {
      const inAddedList = this.eventTypesAddedList.filter((type) => type.typeCode === selectedType.typeCode);
      const inUpdatedList = this.eventTypesUpdatedList.filter((type) => type.typeCode === selectedType.typeCode);

      if (inUpdatedList.length !== 0) {
        // in updated list
        this.confirmationService.confirmDelete({
          messageKey: partialMessageKey,
          accept: () => {
            this.eventTypesUpdatedList = this.eventTypesUpdatedList.filter(
              (type) => type.typeCode !== selectedType.typeCode
            );
            this.eventTypeService.deleteEventType(this.eventTypesTableDataSource.dataSelection).subscribe((result) => {
              this.messageService.showSuccessMessage('global.deleteSuccessMsg');
              this.loadEventTypeTableData();
              this.eventTypesTableDataSource.dataSelection = [];
            });
          }
        });
      } else if (inAddedList.length !== 0) {
        // in added list
        this.confirmationService.confirmDelete({
          messageKey: partialMessageKey,
          accept: () => {
            this.eventTypesAddedList = this.eventTypesAddedList.filter(
              (element) => element.typeCode !== selectedType.typeCode
            );
            this.eventTypesTableDataSource.setData(
              this.eventTypesTableDataSource.dataSrc.filter((type) => type.typeCode !== selectedType.typeCode)
            );
            this.eventTypesTableDataSource.dataSelection = [];
            this.messageService.showSuccessMessage('global.deleteSuccessMsg');
          }
        });
      } else if (inAddedList.length === 0 && inUpdatedList.length === 0) {
        this.confirmationService.confirmDelete({
          messageKey: partialMessageKey,
          accept: () => {
            this.eventTypeService.deleteEventType(this.eventTypesTableDataSource.dataSelection).subscribe((result) => {
              this.messageService.showSuccessMessage('global.deleteSuccessMsg');
              this.refresh();
            });
          }
        });
      }
    });
  }

  public createEventType(event: BidoNotificationTypeDTO): void {
    if (event) {
      const addedEventTypesExist = this.eventTypesTableDataSource.dataSrc.filter(
        (type) => event.typeCode === type.typeCode
      );
      if (addedEventTypesExist.length === 0) {
        // new event type
        this.eventTypesAddedList = [...this.eventTypesAddedList, event];
        const eventType: EventTypeDTO = {
          typeCode: event.typeCode,
          typeCategory: event.typeCategory,
          typeDescription: event.typeDescription,
          criticality: event.criticality
        };
        LabelValueUtils.stringValueToLabel<EventTypeDTO>(eventType, 'typeCategory', this.typeCategories);
        this.eventTypesTableDataSource.addData([eventType]);
      } else {
        this.messageService.showErrorMessage(this.getTranslateKey('bidoNotificationTypeAlreadyExists'));
      }
    }
  }

  public updateEventType(event: BidoNotificationTypeDTO): void {
    if (this.currentEventTypeIndex !== null && this.currentEventTypeIndex !== undefined) {
      const eventExistsInAddedList = this.eventTypesAddedList.filter((type) => event.typeCode === type.typeCode);
      const eventExistsInUpdatedList = this.eventTypesUpdatedList.filter((type) => event.typeCode === type.typeCode);

      if (eventExistsInAddedList.length !== 0) {
        const indexInAddedList = this.eventTypesAddedList.findIndex((type) => type === eventExistsInAddedList[0]);
        this.eventTypesAddedList[indexInAddedList] = event;
      } else if (eventExistsInUpdatedList.length !== 0) {
        const indexInUpdatedList = this.eventTypesUpdatedList.findIndex((type) => type === eventExistsInUpdatedList[0]);
        this.eventTypesUpdatedList[indexInUpdatedList] = event;
      } else if (eventExistsInAddedList.length === 0 && eventExistsInUpdatedList.length === 0) {
        this.eventTypesUpdatedList = [...this.eventTypesUpdatedList, event];
      }
      const eventType: EventTypeDTO = {
        typeCode: event.typeCode,
        typeCategory: event.typeCategory,
        typeDescription: event.typeDescription,
        criticality: event.criticality
      };
      LabelValueUtils.stringValueToLabel<BidoNotificationTypeDTO>(eventType, 'typeCategory', this.typeCategories);
      this.eventTypesTableDataSource.replaceData(
        this.eventTypesTableDataSource.dataSrc[this.currentEventTypeIndex],
        eventType
      );
      this.eventTypesTableDataSource.dataSelection = [];
      this.currentEventTypeIndex = undefined;
    } else {
      super.throwUnboundLocalError('updateEventType', 'this.currentEventTypeIndex');
    }
  }
}
