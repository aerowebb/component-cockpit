import { Component, Input, OnInit } from '@angular/core';
import { finalize } from 'rxjs/internal/operators/finalize';

import { AWPropertiesConstants } from '../../../../../shared/constants/aw-properties-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../../shared/services/confirmation.service';
import { MessageService } from '../../../../../shared/services/message.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { BsdeAvailabilityInput } from '../../../../../shared/types/api-input-types/project-management/bsde-availability-input.interface';
import { BidoEquipmentDTO } from '../../../../../shared/types/api-types/bido-equipment-dto.interface';
import { BsdeAvailabilityDTOCustom } from '../../../../../shared/types/api-types/bsde-availability-dto-custom.interface';
import { BsdeAvailabilityDTOId } from '../../../../../shared/types/api-types/bsde-availability-dto-id.interface';
import { BsdeAvailabilityDTO } from '../../../../../shared/types/api-types/bsde-availability-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { TableColumn } from '../../../../../shared/types/table-column.interface';
import { BidoEquipmentUtils } from '../../../../../shared/utils/bido-equipment-utils';
import { ForecastFormService } from '../forecast-form.service';

@Component({
  selector: 'aw-dialog-forecast-form-assets-required-availabilities',
  templateUrl: './assets-required-availabilities.component.html'
})
export class AssetRequiredAvailabilitiesForecastFormDialogComponent extends DialogComponent implements OnInit {
  private static readonly AVAILABILITY_TYPE = AWPropertiesConstants.AVAILABILITY_TYPE_QUALIFICATION;

  @Input() private readonly projectId: number;
  @Input() public topAssetList: BidoEquipmentDTO[];

  public availabilitiesTable: BsdeAvailabilityDTOCustom[];
  public availabilitiesTableSelection: BsdeAvailabilityDTOCustom[];
  public availabilitiesTableColList: TableColumn[];

  public saveSpinner: boolean;

  public assetList: LabelValue<string>[];

  public constructor(
    private readonly messageService: MessageService,
    public sessionService: SessionService,
    private readonly confirmationService: ConfirmationService,
    private readonly forcastFormService: ForecastFormService
  ) {
    super(ComponentOpenMode.Write, 'AssetRequiredAvailabilitiesForecastFormDialogComponent');
  }

  public ngOnInit(): void {
    this.assetList = [];
    this.availabilitiesTableColList = [
      { field: 'number', alignment: 'center', width: '5%' },
      { field: 'availabilityStartDate', alignment: 'left', width: '10%' },
      { field: 'availabilityEndDate', alignment: 'left', width: '10%' },
      { field: 'availabilityCode', alignment: 'left', width: '30%' },
      { field: 'availabilityPerWeek', alignment: 'left', width: '15%' },
      { field: 'availabilityPerWeekEnd', alignment: 'left', width: '15%' }
    ];

    this.loadAssetList();
    this.availabilitiesTableSelection = [];
    this.loadAvailabilityData();
  }

  private loadAssetList() {
    this.topAssetList.forEach((dto) => {
      this.assetList.push({
        label: BidoEquipmentUtils.createAssetRepresentation(dto),
        value: dto.equipmentCode as string
      });
    });

    // Remove asset drop down in case assets are <= 1
    if (this.assetList.length <= 1) {
      const AVAILABILITY_CODE_COL_INDEX = 3;
      this.availabilitiesTableColList.splice(AVAILABILITY_CODE_COL_INDEX, 1);
    }
  }

  /************************************
   * Load Dialog data
   ************************************/
  private loadAvailabilityData() {
    this.availabilitiesTable = [];
    const input: BsdeAvailabilityInput = {
      projectId: this.projectId,
      availabilityType: AssetRequiredAvailabilitiesForecastFormDialogComponent.AVAILABILITY_TYPE
    };
    this.forcastFormService
      .findBsdeAvailabilitysByProjectAndAvailabilityTypeAndAvailabilityCode(input)
      .subscribe((res) => {
        res.forEach((row) => {
          const availabilityEndDates = this.getAvailabilityEndDate(res, row);
          this.availabilitiesTable.push({
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

  /************************************
   * Add Entry
   ************************************/
  public addAvailabilities() {
    this.availabilitiesTable.push({
      number: this.availabilitiesTable.length === 0 ? 1 : this.availabilitiesTable.length + 1,
      availabilityPerWeek: 0,
      availabilityPerWeekEnd: 0,
      availabilityType: AssetRequiredAvailabilitiesForecastFormDialogComponent.AVAILABILITY_TYPE,
      projectId: this.projectId.toString()
    });
  }

  // Sort acc to date
  private dateSelectionEvent() {
    this.availabilitiesTable = this.availabilitiesTable.sort((a, b): number => {
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
        .createOrUpdateBsdeAvailability(this.availabilitiesTable as BsdeAvailabilityDTO[])
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
    let errorMsg = '';

    this.availabilitiesTable.forEach((res) => {
      if (res.availabilityPerWeek === null || res.availabilityPerWeekEnd === null) {
        errorMsg = this.getTranslateKey('weekMandatoryFields');
        validation = false;
      }

      if (
        (!!res.availabilityPerWeek && res.availabilityPerWeek > WORKING_DAY_HOUR_LIMIT) ||
        (!!res.availabilityPerWeekEnd && res.availabilityPerWeekEnd > WORKING_DAY_HOUR_LIMIT)
      ) {
        errorMsg = this.getTranslateKey('valueCannotBeGreaterThanWorkingDayHourLimit');
        validation = false;
      }

      if (!res.availabilityStartDate) {
        errorMsg = this.getTranslateKey('startDateMandatory');
        validation = false;
      }

      if (this.assetList.length === 0 && !res.availabilityCode) {
        errorMsg = this.getTranslateKey('assetMandatory');
        validation = false;
      } else if (this.assetList.length === 1) {
        res.availabilityCode = this.assetList[0].value;
      }
    });

    if (!!errorMsg) {
      this.messageService.showErrorMessage(errorMsg);
    }

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
        const cloneTable = [...this.availabilitiesTable];
        this.availabilitiesTableSelection.forEach((res) => {
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
          this.availabilitiesTableSelection = [];
        });
      }
    });
  }

  /************************************
   * Reset Table Counter
   ************************************/
  private resetTableCounter() {
    this.availabilitiesTable.forEach((res, index) => {
      res.number = index + 1;
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
}
