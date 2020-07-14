import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { SessionService } from '../../../../../shared/services/session.service';
import { MaintenanceForecastingWorkPackage } from '../../../../../shared/types/api-output-types/maintenance-plan/maintenance-forecasting-work-package.interface';
import { BidmProjectDTO } from '../../../../../shared/types/api-types/bidm-project-dto.interface';
import { BidmWorkOrderDTO } from '../../../../../shared/types/api-types/bidm-work-order-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { DialogWorkOrderEditService } from '../../../work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.service';
import { EventModel } from '../forecast-form.service';

@Component({
  selector: 'aw-dialog-forecast-form-work-package',
  templateUrl: './work-package-dialog.component.html'
})
export class WorkPackageForecastFormDialogComponent extends DialogComponent implements OnInit {
  @Input()
  public endtDate: Date;

  @Input()
  public eventModel: EventModel<MaintenanceForecastingWorkPackage> | undefined;

  @Input()
  public forecastMroCenter: string | undefined;

  @Input()
  public siteList: LabelValue<string>[];

  @Input()
  public startDate: Date;

  @Input()
  public workPackageAssignedToList: LabelValue<string>[];

  @Input()
  public workPackageStatusList: LabelValue<string>[];

  @Input()
  public workPackageTypeList: LabelValue<string>[];

  @Output()
  public onCreated: EventEmitter<MaintenanceForecastingWorkPackage>;

  @Output()
  public onUpdated: EventEmitter<EventModel<MaintenanceForecastingWorkPackage>>;

  public workOrderList: BidmWorkOrderDTO[];
  public workPackage: BidmProjectDTO;
  public workShopList: SelectItem[];

  public constructor(
    public sessionService: SessionService,
    private readonly dialogWorkOrderEditService: DialogWorkOrderEditService
  ) {
    super(ComponentOpenMode.Write, 'WorkPackageForecastFormDialogComponent');

    this.init();
  }

  public ngOnInit(): void {
    if (this.eventModel) {
      this.workOrderList = this.eventModel._obj.bidmWorkOrderList;
      this.workPackage = this.eventModel._obj.bidmProject;
    } else {
      this.workOrderList = [];
      this.workPackage = {};
      this.workPackage.projectStartDate = this.startDate;
      this.workPackage.projectDueDate = this.endtDate;

      this.updateOpenMode(ComponentOpenMode.Create);
    }

    this.workPackage.bireRepairCenterCode = this.forecastMroCenter;
    this.getWorkShops();
  }

  public validate(): void {
    if (this.eventModel) {
      this.eventModel._obj.bidmWorkOrderList = this.workOrderList;
      this.eventModel._obj.bidmProject = this.workPackage;

      this.onUpdated.emit(this.eventModel);
    } else {
      this.onCreated.emit({ bidmProject: this.workPackage, bidmWorkOrderList: this.workOrderList });
    }

    this.closeDialog();
  }

  private init(): void {
    this.workOrderList = [];
    this.workPackage = {};

    this.onCreated = new EventEmitter<MaintenanceForecastingWorkPackage>();
    this.onUpdated = new EventEmitter<EventModel<MaintenanceForecastingWorkPackage>>();
  }
  /**
   * To get the list of workshops on selection of MRO center
   */
  public getWorkShops(): void {
    this.dialogWorkOrderEditService.loadWarehouseList(this.workPackage.bireRepairCenterCode).subscribe((result) => {
      this.workShopList = result.map((workCenter) => {
        return {
          label: workCenter.label,
          value: Number(workCenter.value)
        };
      });
    });
  }
}
