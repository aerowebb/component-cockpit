import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, forkJoin } from 'rxjs';

import { AppConstants } from '../../../shared/constants/app-constants';
import { DialogComponent } from '../../../shared/types/dialog-component';
import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { TableColumnFilterMode } from '../../enums/table-column-filter-mode.enum';
import { TableSelectionMode } from '../../enums/table-selection-mode.enum';
import { ConfirmationService } from '../../services/confirmation.service';
import { DateService } from '../../services/date.service';
import { MessageService } from '../../services/message.service';
import { PropertiesService } from '../../services/properties.service';
import { SessionService } from '../../services/session.service';
import { UpdateHistoricService } from '../../services/update-historic.service';
import { LabelValue } from '../../types/label-value.interface';
import { LabelValueUtils } from '../../utils/label-value-utils';
import { DialogTableData } from '../dialog-table/types/dialog-table-data.interface';

@Component({
  selector: 'aw-status-update-history',
  styleUrls: ['./status-update-history.component.scss'],
  templateUrl: './status-update-history.component.html'
})
export class StatusUpdateHistoryComponent<T1, T2> extends DialogComponent implements OnInit {
  @Output()
  public onUpdated = new EventEmitter<T1>();

  @Input('object')
  public object: T1 | null;

  @Input('data')
  public tableData: DialogTableData<T2>;

  @Input('deleteApi')
  public deleteApi: string;

  @Input('keyMap')
  public keyObservableMap: Map<string, Observable<LabelValue<string>[]>>;

  @Input('isStatusEditable')
  public isStatusEditable: boolean;

  @Input('isObjectTypeOfBireSbDTO')
  public readonly isObjectTypeOfBireSbDTO: boolean;

  @Input('isObjectTypeOfBireEvolutionDTO')
  public readonly isObjectTypeOfBireEvolutionDTO: boolean;

  @Input('isObjectBireMaintenancePlanDTO')
  public readonly isObjectBireMaintenancePlanDTO: boolean;

  @Input('isSapSession')
  private readonly isSapSession: boolean;

  public componentId: string;

  public columnsWithKey: string[];
  public keyValueMap: { [key: string]: string };
  public readonly tableColumnFilterMode: typeof TableColumnFilterMode;
  public readonly tableSelectionMode: typeof TableSelectionMode;

  public showColumnFilters: boolean;

  public selectedRows: T2[];
  public tableRows: T2[];

  public statusList: LabelValue<string>[];

  public isLoading: boolean;
  public DATE_WITH_HOUR: string = AppConstants.MOMENTJS_DATE_TIME;

  public constructor(
    private readonly messageService: MessageService,
    private readonly propertiesService: PropertiesService,
    public sessionService: SessionService,
    private readonly updateHistoricService: UpdateHistoricService,
    private readonly confirmationService: ConfirmationService,
    public translateService: TranslateService,
    public dateService: DateService
  ) {
    super(ComponentOpenMode.Write, 'DialogStatusUpdateComponent');

    this.tableColumnFilterMode = TableColumnFilterMode;
    this.tableSelectionMode = TableSelectionMode;

    this.columnsWithKey = [];
    this.keyValueMap = {};

    this.statusList = [];

    this.tableRows = [];

    this.showColumnFilters = true;

    this.selectedRows = [];

    this.isLoading = false;
  }

  public ngOnInit(): void {
    const statusDate = 'statusDate';
    const statusState = 'statusState';

    if (!!this.object) {
      this.loadStatusList(this.object[statusState]);
    }

    if (this.tableData) {
      this.componentId = this.tableData.componentId;
      this.loadTableRows();
      this.loadKeyValueMapping();
    }

    if (!!this.object && this.object[statusDate]) {
      this.object[statusDate] = new Date(this.object[statusDate]);
    }
  }

  private loadKeyValueMapping(): void {
    if (this.keyObservableMap) {
      this.columnsWithKey = Array.from(this.keyObservableMap.keys());
      const observables = Array.from(this.keyObservableMap.values());

      forkJoin(observables).subscribe((results: LabelValue<string>[][]) => {
        results.forEach((result) => {
          result.forEach((element) => {
            this.keyValueMap[element.value] = element.label;
          });
        });
        if (this.object) {
          const statusState = 'statusState';
          this.addMissingStatusLabel(this.object[statusState]);
        }
      });
    }
  }

  private loadTableRows(): void {
    if (!!this.tableData) {
      this.isLoading = true;
      const statusState = 'statusState';

      this.tableData.tableRows.subscribe(
        (results) => {
          this.isLoading = false;
          this.tableRows = results.list;
          this.tableRows.forEach((element) => {
            this.addMissingStatusLabel(element[statusState]);
            if (!LabelValueUtils.stringValueToLabel<T2>(element, 'statusState', this.statusList)) {
              this.loadStatusList(element[statusState]);
            }
          });
          this.tableRows = [...this.tableRows];
        },
        () => {
          if (this.tableData) {
            this.messageService.showErrorMessage(this.tableData.componentId + '.errorOnGetTableRows');
          }
        }
      );
    }
  }

  private loadStatusList(statusState: string): void {
    this.propertiesService
      .getObjectStatusList(
        this.isObjectTypeOfBireSbDTO,
        this.isObjectTypeOfBireEvolutionDTO,
        this.isObjectBireMaintenancePlanDTO,
        statusState,
        this.isSapSession
      )
      .subscribe(
        (result) => {
          result.forEach((element) => {
            if (this.statusList.filter((status) => status.value === element.value).length === 0) {
              this.statusList.push(element);
            }
          });
          this.statusList = [...this.statusList];
          this.addMissingStatusLabel(statusState);

          this.tableRows.forEach((element) => {
            LabelValueUtils.stringValueToLabel<T2>(element, 'statusState', this.statusList);
          });
          this.tableRows = [...this.tableRows];
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnLoadStatusList'));
        }
      );
  }

  /**
   * Add current state label from keyValueMap if status value unavailable in status list
   * Introduced for feature 2058 (added func object status to Part Number)
   * as it can be in a new function object status or in a former object status.
   * @param statusState Object status value.
   */
  private addMissingStatusLabel(statusState: string): void {
    if (
      statusState &&
      this.statusList &&
      !this.statusList.find((lv) => lv.value === statusState) &&
      this.keyValueMap[statusState]
    ) {
      this.statusList.push({ value: statusState, label: this.keyValueMap[statusState] });
    }
  }

  public deleteSelectedObjects(): void {
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey('confirmDeleteSelectedHistories'),
      accept: () => {
        this.updateHistoricService.removeUpdateHistory(this.deleteApi, this.selectedRows).subscribe(
          (result) => {
            if (result) {
              this.loadTableRows();
              this.selectedRows = [];
            } else {
              this.messageService.showErrorMessage(this.getTranslateKey('errorOnDelete'));
            }
          },
          () => {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnDelete'));
          }
        );
      }
    });
  }

  public updateObjectStatus(): void {
    if (!!this.object) {
      this.onUpdated.emit(this.object);
    }
  }
}
