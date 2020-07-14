import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
import { SelectItem } from 'primeng/api';
import { forkJoin } from 'rxjs';
import { concatMap } from 'rxjs/operators';

import { BidoCustomerDTO } from '../../../../../../../generated_files/api-types/bido-customer-dto.interface';
import { BidoEquipmentDTO } from '../../../../../../../generated_files/api-types/bido-equipment-dto.interface';
import { BsdeSiteDTO } from '../../../../../../../generated_files/api-types/bsde-site-dto.interface';
import { BidoFunctionTypeConstants } from '../../../../../shared/constants/bido-function-type-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { SearchBireConversionMatrixInput } from '../../../../../shared/types/api-input-types/unit-conversion-matrix/bire-unit-conversion-matrix-dto.interface';
import { BireConversionMatrixDTO } from '../../../../../shared/types/api-output-types/unit-conversion-matrix/bire-unit-conversion-matrix-dto.interface';
import { BidoEquipmentTableDTO } from '../../../../../shared/types/api-types/bido-equipment-table-dto.interface';
import { BidoFleetDTOId } from '../../../../../shared/types/api-types/bido-fleet-dto-id.interface';
import { BidoFleetDTO } from '../../../../../shared/types/api-types/bido-fleet-dto.interface';
import { BsdeProjectDTO } from '../../../../../shared/types/api-types/bsde-project-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { ListUtils } from '../../../../../shared/utils/list-utils';
import { ObjectUtils } from '../../../../../shared/utils/object-utils';
import { StringUtils } from '../../../../../shared/utils/string-utils';
import { UnitConversionMatrixService } from '../../../../engineering-management/unit-conversion-matrix/unit-conversion-matrix.service';
import { FleetFormService } from '../../../../fleet-management/fleet-form/fleet-form.service';
import { ForecastCategory, ForecastFormService } from '../forecast-form.service';

@Component({
  selector: 'aw-dialog-forecast-form-project-header',
  templateUrl: './forecast-project-header-dialog.component.html'
})
export class ForecastProjectHeaderDialogComponent extends DialogComponent implements OnInit {
  @Input()
  public forecastProject: BsdeProjectDTO;

  @Input()
  public forecastProjectSrc: BsdeProjectDTO;

  @Input()
  public forecastProjectAsset: BidoEquipmentDTO;

  @Input()
  public selectedForecastCategory: ForecastCategory;

  @Input()
  public forecastProjectId: string | undefined;

  @Input()
  public forecastProjectLlpEventsGeneration: boolean;

  @Input()
  public forecastProjectOccurrenceNumber: number | undefined;

  @Input()
  public selectedRepairCenter: BsdeSiteDTO | undefined;

  @Input()
  public selectedWorkCenter: number | undefined;

  @Input()
  public selectedCustomer: BidoCustomerDTO | undefined;

  @Input()
  public showSearchFleetDialog: boolean;

  @Input()
  public showSearchAssetDialog: boolean;

  @Input()
  public customerList: LabelValue<BidoCustomerDTO>[];

  @Input()
  public repairCenterList: LabelValue<BsdeSiteDTO>[];

  @Input()
  public forecastCategoryList: SelectItem[];

  @Input()
  public occurrenceList: LabelValue<number>[];

  @Output()
  public onSave: EventEmitter<string | undefined>;

  public readonly forecastCategory: typeof ForecastCategory;
  public readonly bidoFunctionTypeConstants: typeof BidoFunctionTypeConstants;
  public assetSelected: boolean;
  public workCenterList: SelectItem[];

  // Unit Conversion Matrix
  public familyVariantCode: string;
  public ucmList: LabelValue<number>[] | undefined;
  public searchObject: SearchBireConversionMatrixInput;
  public conversionMatrixDTO: BireConversionMatrixDTO;
  public selectedconversionMatrixDTO: number | undefined;

  public constructor(
    public forecastFormService: ForecastFormService,
    public messageService: MessageService,
    public sessionService: SessionService,
    private readonly unitConversionMatrixService: UnitConversionMatrixService,
    private readonly fleetFormService: FleetFormService
  ) {
    super(ComponentOpenMode.Write, 'ForecastProjectHeaderDialogComponent');
    this.bidoFunctionTypeConstants = BidoFunctionTypeConstants;
    this.assetSelected = false;

    this.onSave = new EventEmitter<string | undefined>();
  }

  public ngOnInit(): void {
    if (!!this.forecastProject.projectPn || !!this.forecastProject.projectSn) {
      this.assetSelected = true;
    }

    // Unit conversion matrix
    this.searchObject = {};
    this.ucmList = [];

    this.workCenterList = [];
    this.updateRepairCenterCode();

    if (this.assetSelected) {
      this.getConversionMatrixForAsset();
    } else {
      if (!!this.forecastProject.projectFleetId) {
        this.getFleetEquipments(this.forecastProject.projectFleetId);
      }
    }
  }

  public cancelForecastProject(): void {
    this.closeDialog();
  }

  private createForecastProject(): void {
    if (this.checkForecastProject()) {
      const forecastProjectObservable =
        this.selectedForecastCategory === ForecastCategory.FLEET
          ? this.forecastFormService.getBsdeProjectListByFleetId(this.forecastProject.projectFleetId as string)
          : this.forecastFormService.getBsdeProjectListByPnAndSn({
              pnCode: this.forecastProjectAsset.statusState,
              sn: this.forecastProjectAsset.sn
            });

      forecastProjectObservable.subscribe({
        next: (forecastProjectList) => {
          const existingProjectNotClosed = ListUtils.orEmpty(forecastProjectList).some(
            (forecastProject) => forecastProject.statusState !== BidoFunctionTypeConstants.UC_MFO_FORECAST_CLOSING
          );

          if (existingProjectNotClosed) {
            this.messageService.showWarningMessage(
              this.getTranslateKey(
                this.selectedForecastCategory === ForecastCategory.FLEET
                  ? 'errorOnProjectAlreadyExistByFleet'
                  : 'errorOnProjectAlreadyExistByPnSn'
              )
            );
          } else {
            this.forecastProject.fromSap = false;
            this.forecastProject.projectStartDate = this.forecastProject.projectStartDate || new Date();
            this.forecastProject.statusDate = new Date();
            this.forecastProject.statusState = BidoFunctionTypeConstants.UC_MFO_FORECAST_MANAGEMENT;

            if (ObjectUtils.isDefined(this.selectedCustomer)) {
              this.forecastProject.customerCode = (this.selectedCustomer as BidoCustomerDTO).customerCode;
            } else {
              this.forecastProject.customerCode = undefined;
            }

            this.forecastFormService
              .createBsdeProject(this.forecastProject)
              .pipe(
                concatMap((forecastProjectId) => {
                  this.forecastProjectId = forecastProjectId.projectId;

                  return this.forecastFormService.saveForecastProjectAttributes(
                    forecastProjectId.projectId,
                    this.forecastProjectLlpEventsGeneration,
                    this.forecastProjectOccurrenceNumber
                  );
                })
              )
              .subscribe({
                next: () => {
                  this.updateOpenMode(ComponentOpenMode.Write);

                  this.onSave.emit(this.forecastProjectId);
                  this.messageService.showSuccessMessage(this.getTranslateKey('successOnCreateForecast'));
                  this.closeDialog();
                }
              });
          }
        }
      });
    }
  }

  private updateForecastProject(): void {
    if (this.checkForecastProject()) {
      this.forecastFormService.isForecastProjectLocked(this.forecastProjectId as string).subscribe({
        next: (isForecastProjectLocked) => {
          if (isForecastProjectLocked) {
            this.messageService.showWarningMessage(this.getTranslateKey('warningOnForecastLocked'));
          } else {
            this.forecastFormService
              .updateMaintenanceForecasting(this.forecastProject, this.forecastProjectId as string)
              .pipe(
                concatMap(() =>
                  this.forecastFormService.saveForecastProjectAttributes(
                    this.forecastProjectId as string,
                    this.forecastProjectLlpEventsGeneration,
                    this.forecastProjectOccurrenceNumber
                  )
                )
              )
              .subscribe({
                next: () => {
                  this.onSave.emit();
                  this.messageService.showSuccessMessage(this.getTranslateKey('successOnUpdateForecast'));
                  this.closeDialog();
                }
              });
          }
        }
      });
    }
  }

  public updateRepairCenterCode(): void {
    if (ObjectUtils.isDefined(this.selectedRepairCenter)) {
      this.forecastProject.repairCenterCode = (this.selectedRepairCenter as BsdeSiteDTO).repairCenterCode;
      this.initializeWorkCenterList(this.forecastProject.repairCenterCode as string);
    } else {
      this.forecastProject.repairCenterCode = undefined;
    }
  }

  private initializeWorkCenterList(siteCode: string) {
    this.forecastFormService.loadWorkCenterListBySite(siteCode).subscribe((result) => {
      this.workCenterList = result.map((mroCenter) => {
        return {
          label: mroCenter.label,
          value: Number(mroCenter.value)
        };
      });
    });
  }

  public updateWorkCenter(): void {
    if (ObjectUtils.isDefined(this.selectedWorkCenter)) {
      this.forecastProject.whId = this.selectedWorkCenter;
    } else {
      this.forecastProject.whId = undefined;
    }
  }

  public updateCustomerCode(): void {
    if (ObjectUtils.isDefined(this.selectedCustomer)) {
      this.forecastProject.customerCode = (this.selectedCustomer as BidoCustomerDTO).customerCode;
    } else {
      this.forecastProject.customerCode = undefined;
    }
  }

  public openSearchFleetDialog(): void {
    this.showSearchFleetDialog = true;
  }

  public clearForecastProjectFleet(): void {
    this.forecastProject.customerCode = undefined;
    this.forecastProject.projectFleetCode = undefined;
    this.forecastProject.projectFleetId = undefined;
    this.forecastProject.projectFleetName = undefined;
  }

  public openSearchAssetDialog(): void {
    this.showSearchAssetDialog = true;
  }

  public clearForecastProjectAsset(): void {
    this.forecastProject.projectPn = undefined;
    this.forecastProject.projectSn = undefined;
    this.forecastProjectAsset = {};
  }

  private checkForecastProject(): boolean {
    if (StringUtils.isNullOrEmpty(this.forecastProject.projectName)) {
      this.messageService.showWarningMessage(this.getTranslateKey('warningOnNoSelectedForecastName'));

      return false;
    } else if (
      this.forecastProject.projectStartDate &&
      this.forecastProject.projectEndDate &&
      moment(this.forecastProject.projectStartDate).isAfter(moment(this.forecastProject.projectEndDate))
    ) {
      this.messageService.showWarningMessage(this.getTranslateKey('startDateAfterEndDate'));

      return false;
    } else if (
      this.selectedForecastCategory === ForecastCategory.ASSET &&
      !ObjectUtils.isDefined(this.forecastProjectAsset.equipmentCode)
    ) {
      this.messageService.showWarningMessage(this.getTranslateKey('warningOnNoSelectedAsset'));

      return false;
    } else if (
      this.selectedForecastCategory === ForecastCategory.FLEET &&
      !ObjectUtils.isDefined(this.forecastProject.projectFleetCode)
    ) {
      this.messageService.showWarningMessage(this.getTranslateKey('warningOnNoSelectedFleet'));

      return false;
    } else if (!ObjectUtils.isDefined(this.selectedconversionMatrixDTO)) {
      this.messageService.showWarningMessage(this.getTranslateKey('warningOnNoSelectedUnitConversionMatrix'));

      return false;
    } else {
      return true;
    }
  }

  public saveForecastProject() {
    if (this.isCreateOpenMode || !this.forecastProjectId) {
      this.createForecastProject();
    } else {
      this.updateForecastProject();
    }
  }

  public onChangeForecastCategory(event: { option: { label: string; value: number } }): void {
    if (event.option.value === ForecastCategory.ASSET) {
      this.clearForecastProjectFleet();
      this.assetSelected = true;
    } else {
      this.clearForecastProjectAsset();
      this.assetSelected = false;
    }

    this.ucmList = [];
  }

  public onSelectedAsset(asset: {
    equipmentCode?: string;
    equipmentFunction?: string;
    pnCode?: string;
    registration?: string;
    sn?: string;
    familyVariantCode?: string;
  }): void {
    this.forecastProject.projectPn = asset.pnCode;
    this.forecastProject.projectSn = asset.sn;
    this.forecastProjectAsset = asset;

    this.familyVariantCode = !!asset.familyVariantCode ? asset.familyVariantCode : '';
    this.getConversionMatrixForAsset();
  }

  public onSelectedFleet(fleet: BidoFleetDTO): void {
    this.forecastProject.customerCode = fleet.customerCode;
    this.forecastProject.projectFleetCode = fleet.fleetCode;
    this.forecastProject.projectFleetId = fleet.fleetId;
    this.forecastProject.projectFleetName = fleet.fleetName;

    if (!!fleet && !!fleet.fleetId) {
      this.getFleetEquipments(fleet.fleetId);
    }
  }

  // Constants getters
  public getForecastCategoryFleet(): number {
    return ForecastCategory.FLEET;
  }

  public getForecastCategoryAsset(): number {
    return ForecastCategory.ASSET;
  }

  public getBidoFunctionTypeConstantsClosing(): string {
    return BidoFunctionTypeConstants.UC_MFO_FORECAST_CLOSING;
  }

  public reopenForecastProject(): void {
    this.forecastProject.statusState = BidoFunctionTypeConstants.UC_MFO_FORECAST_MANAGEMENT;
    this.forecastProject.projectEndDate = undefined;
  }

  public closeForecastProject(): void {
    this.forecastProject.statusState = BidoFunctionTypeConstants.UC_MFO_FORECAST_CLOSING;
    this.forecastProject.projectEndDate = moment().toDate();
  }

  public getConversionMatrixForAsset(): void {
    if (this.assetSelected || this.forecastProject.projectFleetCode) {
      this.ucmList = [];
      if (this.assetSelected && !!this.forecastProjectAsset.familyVariantCode) {
        this.familyVariantCode = this.forecastProjectAsset.familyVariantCode;
      }
      this.searchObject.familyVariant = this.familyVariantCode;
      forkJoin({
        defaultConversionMatrix: this.unitConversionMatrixService.getDefaultMatrixByFamilyVariant(
          this.familyVariantCode
        ),
        allUnitConversionMatrix: this.unitConversionMatrixService.searchUnitMatrixConversion(this.searchObject)
      }).subscribe({
        next: (result) => {
          if (!!result && !!result.defaultConversionMatrix) {
            this.selectedconversionMatrixDTO = result.defaultConversionMatrix.cmId;
          }

          this.ucmList = result.allUnitConversionMatrix.map((ucm) => {
            return {
              label: `${ucm.cmName}`,
              value: !!ucm.cmId ? ucm.cmId : -1
            };
          });

          if (!!this.forecastProjectSrc.cmId) {
            this.getBireConversionMatrix();
          }
        }
      });
    } else {
      this.ucmList = [];
      this.searchObject = {};
    }
  }

  public getFleetEquipments(fleetId: string): void {
    if (!!fleetId) {
      const fleetTemp: BidoFleetDTOId = {
        fleetId
      };

      this.fleetFormService.findBidoFleet(fleetTemp).subscribe(
        (result) => {
          this.getConversionMatrixForFleet(result.bidoEquipmentTableDTO);
        },
        () => {
          this.messageService.showErrorMessage(this.getTranslateKey('errorOnLoadFleet'));
        }
      );
    }
  }

  public getConversionMatrixForFleet(equipments: BidoEquipmentTableDTO[]): void {
    this.ucmList = [];
    this.searchObject = {};
    if (!!equipments && equipments.length > 0) {
      const allFamilyVariants: string[] = [];
      equipments.forEach((equipment) => {
        if (!!equipment && !!equipment.bidoEquipmentDTO && !!equipment.bidoEquipmentDTO.familyVariantCode) {
          allFamilyVariants.push(equipment.bidoEquipmentDTO.familyVariantCode);
        }
      });

      const uniqueFamilyVariants = allFamilyVariants.filter((elem, i, arr) => {
        if (arr.indexOf(elem) === i) {
          return elem;
        }
      });

      uniqueFamilyVariants.forEach((familyVariant) => {
        this.searchObject.familyVariant = familyVariant;
        this.unitConversionMatrixService.searchUnitMatrixConversion(this.searchObject).subscribe((result) => {
          if (!!result) {
            const ucList: LabelValue<number>[] = result.map((ucm) => {
              return {
                label: `${ucm.cmName}`,
                value: !!ucm.cmId ? ucm.cmId : -1
              };
            });
            if (!!this.ucmList) {
              this.ucmList.push(...ucList);
            }
          }
        });
      });
      if (!!this.forecastProjectSrc.cmId) {
        this.getBireConversionMatrix();
      }
    }
  }

  public getBireConversionMatrix(): void {
    if (!!this.forecastProjectSrc.cmId) {
      this.unitConversionMatrixService.getUnitConversionMatrix(this.forecastProjectSrc.cmId).subscribe((result) => {
        this.selectedconversionMatrixDTO = result.cmId;
      });
    }
  }

  public onChangeConversionMatrix(): void {
    if (!!this.selectedconversionMatrixDTO) {
      this.forecastProject.cmId = this.selectedconversionMatrixDTO;
    }
  }
}
