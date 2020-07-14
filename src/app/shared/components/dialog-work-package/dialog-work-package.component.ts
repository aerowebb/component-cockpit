import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as moment from 'moment';
import { SelectItem } from 'primeng/api';

import { DialogWorkOrderEditService } from '../../../main/maintenance/work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.service';
import { BidoFunctionTypeConstants } from '../../constants/bido-function-type-constants';
import { GenericPropertyConstants } from '../../constants/generic-property-constants';
import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { MessageService } from '../../services/message.service';
import { PropertiesService } from '../../services/properties.service';
import { SessionService } from '../../services/session.service';
import { BidmProjectDTO } from '../../types/api-types/bidm-project-dto.interface';
import { DialogComponent } from '../../types/dialog-component';
import { LabelValue } from '../../types/label-value.interface';
import { ListUtils } from '../../utils/list-utils';
import { SelectItemUtils } from '../../utils/select-item-utils';
import { StringUtils } from '../../utils/string-utils';

import { DialogWorkPackageService } from './dialog-work-package.service';

export enum WPType {
  ACRS = 1,
  GO_NO_GO = 2
}

@Component({
  selector: 'aw-dialog-work-package',
  styleUrls: ['./dialog-work-package.component.scss'],
  templateUrl: './dialog-work-package.component.html'
})
export class DialogWorkPackageComponent extends DialogComponent implements OnInit {
  @Input()
  public displayAssignedTo: boolean;

  @Input()
  public displayDescription: boolean;

  @Input()
  public displayDueDate: boolean;

  @Input()
  public displayMroCenter: boolean;

  @Input()
  public displayName: boolean;

  @Input()
  public displayOperation: boolean;

  @Input()
  public displayStartDate: boolean;

  @Input()
  public displayStatus: boolean;

  @Input()
  public displayWorkCenter: boolean;

  @Input()
  public startDate: Date | undefined;

  @Input()
  public workPackage: BidmProjectDTO;

  @Input()
  public warningMessageList: string[];

  @Input()
  public wpType: WPType = WPType.ACRS;

  @Output()
  public onValidated: EventEmitter<{ workPackage: BidmProjectDTO; workcenter: number | undefined }>;

  public mroCenterList: SelectItem[];
  public operationList: SelectItem[];
  public selectedWorkCenter: number | undefined;
  public typeList: SelectItem[];
  public statusList: SelectItem[];
  public userList: SelectItem[];
  public workShopList: SelectItem[];

  public constructor(
    public sessionService: SessionService,
    private readonly dialogWorkPackageService: DialogWorkPackageService,
    private readonly messageService: MessageService,
    private readonly propertiesService: PropertiesService,
    private readonly dialogWorkOrderEditService: DialogWorkOrderEditService
  ) {
    super(ComponentOpenMode.Write, 'DialogWorkPackageComponent');

    this.init();

    this.loadMroCenterList();
    this.loadOperationList();
    this.loadStatusList();
    this.loadTypeList();
    this.loadUserList();
  }

  public ngOnInit(): void {
    this.fetchDefaultType();
    this.workPackage.projectStartDate = this.startDate;
  }

  public isValid(): boolean {
    return (
      !StringUtils.isNullOrEmpty(this.workPackage.projectName) &&
      !!this.workPackage.projectStartDate &&
      !!this.workPackage.projectType &&
      !StringUtils.isNullOrEmpty(this.workPackage.bireRepairCenterCode)
    );
  }

  public validate(): void {
    if (
      this.workPackage.projectStartDate &&
      this.workPackage.projectDueDate &&
      moment(this.workPackage.projectStartDate).isAfter(moment(this.workPackage.projectDueDate))
    ) {
      this.messageService.showWarningMessage(this.getComponentName() + '.errorOnDates');
    } else {
      this.onValidated.emit({ workPackage: this.workPackage, workcenter: this.selectedWorkCenter });
      this.closeDialog();
    }
  }

  private init(): void {
    this.displayAssignedTo = true;
    this.displayDescription = true;
    this.displayDueDate = true;
    this.displayMroCenter = true;
    this.displayName = true;
    this.displayOperation = true;
    this.displayStartDate = true;
    this.displayStatus = true;
    this.displayWorkCenter = true;
    this.startDate = new Date();

    this.mroCenterList = [];
    this.operationList = [];
    this.selectedWorkCenter = undefined;
    this.typeList = [];
    this.statusList = [];
    this.userList = [];
    this.workShopList = [];

    if (!this.workPackage) {
      this.workPackage = {};
    }

    this.onValidated = new EventEmitter<{ workPackage: BidmProjectDTO; workcenter: number }>();
  }

  private loadMroCenterList(): void {
    /* this.dialogWorkPackageService.findAllMroCenter().subscribe((results) => {
      this.mroCenterList = !!results ? SelectItemUtils.fromLabelValues(results) : [];
    });*/
    this.dialogWorkPackageService.findAuthorizedBireSite().subscribe((results: LabelValue<string>[]) => {
      if (!!results) {
        results.forEach((elt) => {
          if (!!elt.label) {
            elt.label = `${elt.value}-${elt.label}`;
          }
        });
      }
      this.mroCenterList = !!results ? SelectItemUtils.fromLabelValues(results) : [];
    });
  }

  private loadOperationList(): void {
    this.dialogWorkPackageService.findAllBidoOperation().subscribe((results) => {
      this.operationList = SelectItemUtils.fromLabelValues(results);
    });
  }

  private loadStatusList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.AIRM_PROJECT_STATUS_MAP).subscribe((results) => {
      this.statusList = ListUtils.orEmpty(results);
    });
  }

  private loadTypeList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.WORK_PACKAGE_TYPE_MAP).subscribe((results) => {
      this.typeList = ListUtils.orEmpty(results);
    });
  }
  private fetchDefaultType() {
    if (this.wpType) {
      this.workPackage.projectType = `${this.wpType}`;
    }
  }

  private loadUserList(): void {
    this.dialogWorkPackageService
      .findBidoUsersWithUseCase(BidoFunctionTypeConstants.UC_AIRM_RECEPTION)
      .subscribe((results) => {
        const resultUserList = ListUtils.orEmpty(results).map((result) => {
          const userName = `${StringUtils.orEmpty(result.lastname)} ${StringUtils.orEmpty(result.firstname)}`;

          return {
            label: userName.trim(),
            value: result.userId
          };
        });
        this.userList = resultUserList.sort((a, b) => (a.label > b.label ? 1 : a.label < b.label ? -1 : 0));
      });
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
