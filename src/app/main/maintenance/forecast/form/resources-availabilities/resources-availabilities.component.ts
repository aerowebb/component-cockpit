import { Component, Input, OnInit } from '@angular/core';
import { finalize } from 'rxjs/internal/operators/finalize';

import { AWPropertiesConstants } from '../../../../../shared/constants/aw-properties-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../../shared/services/confirmation.service';
import { MessageService } from '../../../../../shared/services/message.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { BsdeAvailabilityInput } from '../../../../../shared/types/api-input-types/project-management/bsde-availability-input.interface';
import { BsdeAvailabilityDTOCustom } from '../../../../../shared/types/api-types/bsde-availability-dto-custom.interface';
import { BsdeAvailabilityDTOId } from '../../../../../shared/types/api-types/bsde-availability-dto-id.interface';
import { BsdeAvailabilityDTO } from '../../../../../shared/types/api-types/bsde-availability-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { TableColumn } from '../../../../../shared/types/table-column.interface';
import { ForecastFormService } from '../forecast-form.service';

@Component({
  selector: 'aw-dialog-forecast-form-resources-availabilities',
  templateUrl: './resources-availabilities.component.html'
})
export class ResourcesAvailabilitiesForecastFormDialogComponent extends DialogComponent implements OnInit {
  private static readonly AVAILABILITY_TYPE = AWPropertiesConstants.AVAILABILITY_TYPE_FLIGHT;

  @Input() private readonly projectId: number;
  @Input() private readonly projectNumber: number;

  public resourcesTable: BsdeAvailabilityDTOCustom[];
  public resourcesTableSelection: BsdeAvailabilityDTOCustom[];
  public resourcesTableColList: TableColumn[];

  public qualificationList: LabelValue<string>[];

  public saveSpinner: boolean;

  public constructor(
    private readonly messageService: MessageService,
    public sessionService: SessionService,
    private readonly confirmationService: ConfirmationService,
    private readonly forcastFormService: ForecastFormService
  ) {
    super(ComponentOpenMode.Write, 'ResourcesAvailabilitiesForecastFormDialogComponent');
  }

  public ngOnInit(): void {
    this.resourcesTableColList = [
      { field: 'number', alignment: 'center', width: '5%' },
      { field: 'availabilityStartDate', alignment: 'left', width: '20%' },
      { field: 'availabilityEndDate', alignment: 'left', width: '20%' },
      { field: 'availabilityCode', alignment: 'left', width: '25%' },
      { field: 'availabilityPerWeek', alignment: 'left', width: '15%' },
      { field: 'availabilityPerWeekEnd', alignment: 'left', width: '15%' }
    ];

    this.resourcesTableSelection = [];

    this.forcastFormService.findAllBireQualificationDatasDropDown().subscribe((res) => {
      this.qualificationList = res;
    });
    this.loadAvailabilityData();
  }

  /************************************
   * Load Dialog data
   ************************************/
  private loadAvailabilityData() {
    this.resourcesTable = [];
    const input: BsdeAvailabilityInput = {
      projectId: this.projectId,
      availabilityType: ResourcesAvailabilitiesForecastFormDialogComponent.AVAILABILITY_TYPE
    };
    this.forcastFormService
      .findBsdeAvailabilitysByProjectAndAvailabilityTypeAndAvailabilityCode(input)
      .subscribe((res) => {
        res.forEach((row) => {
          const availabilityEndDates = this.getAvailabilityEndDate(res, row);
          this.resourcesTable.push({
            availabilityCode: row.availabilityCode,
            availabilityId: row.availabilityId,
            availabilityPerWeek: row.availabilityPerWeek,
            availabilityPerWeekEnd: row.availabilityPerWeekEnd,
            availabilityStartDate: row.availabilityStartDate,
            availabilityType: row.availabilityType,
            projectId: row.projectId,
            isUnavailable: row.isUnavailable,
            availabilityEndDate: availabilityEndDates
          });
        });
        this.resetTableCounter();
      });
  }
  /**
   * getAvailabilityEndDate() - This function is used to calculate the Availabilty End Date field.
   * @param results - Availability Data List
   * @param rowData - Availability Data Row
   */
  private getAvailabilityEndDate(results: BsdeAvailabilityDTO[], rowData: BsdeAvailabilityDTO) {
    let nextDateFound: Date | undefined;
    if (!!rowData.availabilityStartDate) {
      results.forEach((elements) => {
        if (
          rowData.availabilityCode === elements.availabilityCode &&
          elements.availabilityStartDate &&
          rowData.availabilityStartDate &&
          elements.availabilityStartDate > rowData.availabilityStartDate
        ) {
          if (!nextDateFound || (!!nextDateFound && elements.availabilityStartDate < nextDateFound)) {
            nextDateFound = elements.availabilityStartDate;
          }
        }
      });
    }
    if (!!nextDateFound) {
      const nextStartDate = new Date(nextDateFound);
      nextStartDate.setDate(nextStartDate.getDate() - 1);

      return nextStartDate;
    }
  }

  /************************************
   * Add Entry
   ************************************/
  public addAvailabilities() {
    this.resourcesTable.push({
      number: this.resourcesTable.length === 0 ? 1 : this.resourcesTable.length + 1,
      availabilityPerWeek: 0,
      availabilityPerWeekEnd: 0,
      availabilityType: ResourcesAvailabilitiesForecastFormDialogComponent.AVAILABILITY_TYPE,
      projectId: this.projectId.toString()
    });
  }

  // Sort acc to date
  private dateSelectionEvent() {
    this.resourcesTable = this.resourcesTable.sort((a, b): number => {
      if (!!b.availabilityStartDate && !!a.availabilityStartDate) {
        return a.availabilityStartDate.getTime() - b.availabilityStartDate.getTime();
      }

      return -1;
    });

    this.resetTableCounter();
  }

  /************************************
   * Validate Dialog and Save
   ************************************/
  public validate() {
    if (this.validateTable()) {
      this.saveSpinner = true;
      this.dateSelectionEvent();
      this.forcastFormService
        .createOrUpdateBsdeAvailability(this.resourcesTable as BsdeAvailabilityDTO[])
        .pipe(
          finalize(() => {
            this.saveSpinner = false;
          })
        )
        .subscribe((res) => {
          this.loadAvailabilityData();
          this.messageService.showSuccessMessage(this.getTranslateKey('onSaveSuccess'));
        });
    }
  }

  /************************************
   * Table Validation
   ************************************/
  private validateTable() {
    const WORKING_DAY_HOUR_LIMIT = 23;
    let validation = true;

    this.resourcesTable.forEach((res) => {
      if (res.availabilityPerWeek === null || res.availabilityPerWeekEnd === null) {
        this.messageService.showErrorMessage(this.getTranslateKey('weekMandatoryFields'));
        validation = false;
      }

      if (
        (!!res.availabilityPerWeek && res.availabilityPerWeek > WORKING_DAY_HOUR_LIMIT) ||
        (!!res.availabilityPerWeekEnd && res.availabilityPerWeekEnd > WORKING_DAY_HOUR_LIMIT)
      ) {
        this.messageService.showErrorMessage(this.getTranslateKey('valueCannotBeGreaterThanWorkingDayHourLimit'));
        validation = false;
      }

      if (!res.availabilityStartDate) {
        this.messageService.showErrorMessage(this.getTranslateKey('startDateMandatory'));
        validation = false;
      }

      if (!res.availabilityCode) {
        this.messageService.showErrorMessage(this.getTranslateKey('qualificationMandatory'));
        validation = false;
      }
    });

    return validation;
  }

  /************************************
   * Delete Rows
   ************************************/
  public deleteSelectedRows() {
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey('confirmDeleteSelectedAvailabilities'),
      accept: () => {
        const id: BsdeAvailabilityDTOId[] = [];
        const cloneTable = [...this.resourcesTable];
        this.resourcesTableSelection.forEach((res) => {
          if (!!res) {
            if (!!res.availabilityId) {
              id.push({
                availabilityId: res.availabilityId
              });
            }
            cloneTable.splice((res.number as number) - 1, 1);
          }
        });
        this.forcastFormService.removeBsdeAvailability(id).subscribe((res) => {
          this.messageService.showSuccessMessage(this.getTranslateKey('onDeleteSuccess'));
          this.loadAvailabilityData();
          this.resourcesTableSelection = [];
        });
      }
    });
  }

  /************************************
   * Reset Table Counter
   ************************************/
  private resetTableCounter() {
    this.resourcesTable.forEach((res, index) => {
      res.number = index + 1;
    });
  }

  public synchronizeData() {
    this.forcastFormService.synchronizeWithHR(this.projectNumber).subscribe((res: BsdeAvailabilityDTOCustom[]) => {
      this.resourcesTable = res;
    });
  }
}
