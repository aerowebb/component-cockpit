import { Component, EventEmitter, Input, Output } from '@angular/core';

import { EventOVSOutputDTO } from '../../../shared/types/api-output-types/ovs-popup/event-ovs-output-dto.interface';
import { EventCriteriaInputDTO } from '../../../shared/types/api-types/event-criteria-input-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { DialogComponent } from '../../../shared/types/dialog-component';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { MessageService } from '../../services/message.service';
import { LabelValue } from '../../types/label-value.interface';
import { LabelValueUtils } from '../../utils/label-value-utils';

import { DialogSearchEventService } from './dialog-search-event.service';

@Component({
  selector: 'aw-dialog-search-event',
  templateUrl: 'dialog-search-event.component.html'
})
export class DialogSearchEventComponent extends DialogComponent {
  public resultsTableCols: TableColumn[];
  public resultsTable: SearchResultsDTO<EventOVSOutputDTO>;
  public selectedObject: EventOVSOutputDTO;
  public searchObject: EventCriteriaInputDTO;

  // DropDown
  public propertyCategory: LabelValue<string>[];
  public propertyStatus: LabelValue<string>[];
  public propertyTypes: LabelValue<string>[];

  @Output()
  public onSelected = new EventEmitter<EventOVSOutputDTO>();

  @Input('event-code')
  public set eventCode(eventCode: string) {
    this.searchObject.notificationCode = eventCode;
  }

  public constructor(
    public dialogSearchEventService: DialogSearchEventService,
    private readonly messageService: MessageService
  ) {
    super(ComponentOpenMode.Write, 'DialogSearchEventComponent');

    this.resultsTable = {
      list: [],
      moreResults: false
    };
    this.searchObject = {};
    this.selectedObject = {};

    this.resultsTableCols = [
      { field: 'eventCode', alignment: 'left'  },
      { field: 'eventCategory', alignment: 'left'  },
      { field: 'eventType', alignment: 'left'  },
      { field: 'eventSubject', alignment: 'left'  },
      { field: 'eventStatus', alignment: 'left'  },
      { field: 'sn', alignment: 'left'  }
    ];

    // Load DropDown
    this.loadEventCategories();
    this.loadEventStatus();
    this.loadEventTypes();
  }

  /*
    <summary>Search work package for operator or owner</summary>
    */
  public searchEvents(): void {
    this.dialogSearchEventService.findEvent(this.searchObject).subscribe(
      (results) => {
        if (results) {
          this.selectedObject = {};
          results.list.forEach((element) => {
            LabelValueUtils.stringValueToLabel<EventOVSOutputDTO>(element, 'eventCategory', this.propertyCategory);
            LabelValueUtils.stringValueToLabel<EventOVSOutputDTO>(element, 'eventStatus', this.propertyStatus);
            LabelValueUtils.stringValueToLabel<EventOVSOutputDTO>(element, 'eventType', this.propertyTypes);
          });
          this.resultsTable = results;
        }
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnSearch'));
      }
    );
  }

  /*
    <summary>Emit the selectedObject on validate</summary>
    */
  public onValidate(): void {
    LabelValueUtils.labelToStringValue<EventOVSOutputDTO>(this.selectedObject, 'eventCategory', this.propertyCategory);
    LabelValueUtils.labelToStringValue<EventOVSOutputDTO>(this.selectedObject, 'eventStatus', this.propertyStatus);
    LabelValueUtils.labelToStringValue<EventOVSOutputDTO>(this.selectedObject, 'eventType', this.propertyTypes);
    this.onSelected.emit(this.selectedObject);
    this.selectedObject = {};
    this.display = false;
  }

  // Clean the selectedObject object if the row is unselect
  public onRowUnselect(): void {
    this.selectedObject = {};
  }

  // Clean all the object on rerender
  public onShow(): void {
    this.selectedObject = {};
    this.resultsTable = {
      list: [],
      moreResults: false
    };
  }

  /*
    <summary>Close the pop up on cancel</summary>
    */
  public onCancel(): void {
    this.selectedObject = {};
    this.resultsTable = {
      list: [],
      moreResults: false
    };
    this.display = false;
  }

  public isOneObjectSelected(): boolean {
    return !this.selectedObject.eventCode;
  }

  private loadEventCategories(): void {
    this.dialogSearchEventService.getEventCaterogyValues().subscribe(
      (results) => {
        this.propertyCategory = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnCategoryList'));
      }
    );
  }

  private loadEventStatus(): void {
    this.dialogSearchEventService.getEventStatusValues().subscribe(
      (results) => {
        this.propertyStatus = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnStatusList'));
      }
    );
  }

  private loadEventTypes(): void {
    this.dialogSearchEventService.getEventTypesValues().subscribe(
      (results) => {
        this.propertyTypes = results;
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnTypesList'));
      }
    );
  }
}
