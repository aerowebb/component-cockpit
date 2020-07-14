import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SelectItem } from 'primeng/api';

import { BidoFunctionTypeConstants } from '../../../../../../shared/constants/bido-function-type-constants';
import { ComponentConstants } from '../../../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../../shared/services/message.service';
import { SessionService } from '../../../../../../shared/services/session.service';
import { UsersForWorkOrderInput } from '../../../../../../shared/types/api-input-types/user-profile-management/users-for-work-order.interface';
import { BidmWoAssignmentDTO } from '../../../../../../shared/types/api-types/bidm-wo-assignment-dto.interface';
import { BidmWorkOrderDTO } from '../../../../../../shared/types/api-types/bidm-work-order-dto.interface';
import { BidoUserDTO } from '../../../../../../shared/types/api-types/bido-user-dto.interface';
import { BireTaskDTO } from '../../../../../../shared/types/api-types/bire-task-dto.interface';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
import { EmployeeFormService } from '../../../../../human-resources/employee-form/employee-form.service';
import { DialogWorkOrderEditService } from '../../../../work-package/form/popups/dialog-work-order-edition/dialog-work-order-edition.service';

@Component({
  selector: 'aw-dialog-stakeholder',
  templateUrl: './dialog-stakeholder.component.html'
})
export class DialogStakeholderComponent extends DialogComponent implements OnInit {
  @Input()
  public openMode: ComponentOpenMode;

  @Input()
  public stakeholder: BidmWoAssignmentDTO;

  @Output()
  public onUpdatedStakeholder: EventEmitter<BidmWoAssignmentDTO>;

  @Output()
  public onAddedStakeholder: EventEmitter<BidmWoAssignmentDTO>;

  @Input()
  public task: BireTaskDTO;

  @Input()
  public workOrder: BidmWorkOrderDTO;

  public stakeholderList: SelectItem[];
  public controllers: BidoUserDTO[];
  public isControllerEnable: boolean;

  public readonly componentId: string;
  public displayValue: boolean;
  public types: LabelValue<string>[];

  public stakeHolderTypes: LabelValue<string>[];
  public selectedStakeHolder: string;

  public constructor(
    public readonly sessionService: SessionService,
    public messageService: MessageService,
    private readonly dialogWorkOrderEditService: DialogWorkOrderEditService,
    private readonly employeeFormService: EmployeeFormService,
    public translateService: TranslateService
  ) {
    super(ComponentOpenMode.Write, ComponentConstants.MAI_DIALOG_IMPORT_ORDER_DOCUMENT);

    this.onAddedStakeholder = new EventEmitter<BidmWoAssignmentDTO>();
    this.onUpdatedStakeholder = new EventEmitter<BidmWoAssignmentDTO>();
  }

  public getComponentName(): string {
    return 'DialogStakeholderComponent';
  }

  public ngOnInit(): void {
    this.updateOpenMode(this.openMode);
    if (this.openMode === ComponentOpenMode.Create) {
      this.stakeholder = {};
    }

    this.loadStakeHolderTypes();

    if (!!this.stakeholder && this.stakeholder.controller) {
      this.getControllers();
      this.selectedStakeHolder = 'CT';
    } else {
      this.selectedStakeHolder = 'OP';
      this.getUsersList();
    }
  }

  public validate(): void {
    if (this.isScreenValidated()) {
      if (this.openMode === ComponentOpenMode.Create) {
        this.onAddedStakeholder.emit(this.stakeholder);
      } else {
        this.onUpdatedStakeholder.emit(this.stakeholder);
      }
      this.closeDialog();
    } else {
      this.messageService.showErrorMessage('global.warningOnMissingRequiredFields');
    }
  }

  private getUsersList(): void {
    const param: UsersForWorkOrderInput = {
      useCaseCode: BidoFunctionTypeConstants.UC_AIRM_EXECUTION
    };
    if (!!this.task) {
      param.taskCode = this.task.taskCode;
      param.taskVersion = this.task.taskVersion;
    }
    param.projectId = this.workOrder.projectId;
    param.startDate = this.workOrder.woScheduledStartDate;
    this.dialogWorkOrderEditService.findUsersWithUseCaseForWorkOrder(param).subscribe((data: BidoUserDTO[]) => {
      this.stakeholderList = data.map((user) => {
        return {
          label: `${user.lastname} ${user.firstname}`,
          value: user.userId
        };
      });
      if (!!this.stakeholder.woAssignedTo) {
        const inList = this.stakeholderList.find((elem: SelectItem) => elem.value === this.stakeholder.woAssignedTo);
        if (!!inList) {
          this.stakeholder.woAssignedTo = inList.value;
        }
      }

      if (this.openMode !== ComponentOpenMode.Read) {
        this.stakeholder.controller = false;
      }
    });
  }

  private getControllers(): void {
    const param: UsersForWorkOrderInput = {
      useCaseCode: BidoFunctionTypeConstants.UC_AIRM_QUALITY_CHECK
    };

    param.projectId = this.workOrder.projectId;
    param.startDate = this.workOrder.woScheduledStartDate;
    this.stakeholderList = [];
    if (this.openMode !== ComponentOpenMode.Read) {
      this.stakeholder.woAssignedTo = -1;
    }

    this.dialogWorkOrderEditService.findUsersWithUseCaseForWorkOrder(param).subscribe((data: BidoUserDTO[]) => {
      this.controllers = data;
      this.stakeholderList = data.map((user) => {
        return {
          label: `${user.lastname} ${user.firstname}`,
          value: user.userId
        };
      });

      if (!!this.stakeholder.woAssignedTo) {
        const inList = this.stakeholderList.find((elem: SelectItem) => elem.value === this.stakeholder.woAssignedTo);
        this.stakeholder.woAssignedTo = !!inList ? inList.value : undefined;
      }
      if (this.openMode !== ComponentOpenMode.Read) {
        this.stakeholder.controller = true;
      }
    });
  }

  public onAssignedUserChange() {
    if (!!this.stakeholder.woAssignedTo) {
      this.isControllerEnable = false;
      const employeeId: number = this.stakeholder.woAssignedTo;
      this.employeeFormService.getEmployeeQualificationText(employeeId.toString()).subscribe((result) => {
        this.stakeholder.employeeQualification = result;
      });
    }
  }

  public onChangeStakeHolderType(): void {
    if (this.selectedStakeHolder === 'OP') {
      this.stakeholder.controller = false;
      this.getUsersList();
    } else {
      this.stakeholder.controller = true;
      this.getControllers();
    }
    this.stakeholder.woAssignedTo = -1;
    this.stakeholder.employeeQualification = '';
  }

  public closeDialog(): void {
    this.display = false;
  }

  private isScreenValidated() {
    if (
      this.stakeholder.woAssignedTo === null ||
      this.stakeholder.woAssignedTo === undefined ||
      this.stakeholder.woAssignedTo.toString().length === 0
    ) {
      return false;
    } else {
      return true;
    }
  }

  public loadStakeHolderTypes(): void {
    this.stakeHolderTypes = [
      { label: `${this.translateService.instant(this.getTranslateKey('operator'))}`, value: 'OP' },
      { label: `${this.translateService.instant(this.getTranslateKey('isController'))}`, value: 'CT' }
    ];
  }
}
