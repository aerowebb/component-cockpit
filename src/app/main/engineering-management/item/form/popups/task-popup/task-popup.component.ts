import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { GenericPropertyConstants } from '../../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../../shared/services/properties.service';
import { TaskAssociatedItemOutput } from '../../../../../../shared/types/api-output-types/task-management/task-associated-item-output.interface';
import { BireItemDTOId } from '../../../../../../shared/types/api-types/bire-item-dto-id.interface';
import { BireTaskDTO } from '../../../../../../shared/types/api-types/bire-task-dto.interface';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
import { PopupEntry } from '../../../../../../shared/types/popup-entry.interface';
import { ItemFormService } from '../../item-form.service';

@Component({
  selector: 'aw-task-popup',
  templateUrl: './task-popup.component.html'
})
export class TaskPopupComponent extends DialogComponent implements OnInit {
  @Input('component-data')
  public componentData: PopupEntry<TaskAssociatedItemOutput> | null;

  @Output()
  public onCreate: EventEmitter<TaskAssociatedItemOutput>;

  @Input('bireItemDTOId')
  public bireItemDTOId: BireItemDTOId;

  public taskAssociatedItemOutput: TaskAssociatedItemOutput;
  public showItemTaskSearchPopup: boolean;
  public itemVersionList: LabelValue<string>[];
  public taskItemList: LabelValue<string>[];

  public constructor(
    private readonly messageService: MessageService,
    private readonly itemFormService: ItemFormService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Write, 'TaskPopupComponent');
    this.onCreate = new EventEmitter<TaskAssociatedItemOutput>();
  }

  public ngOnInit() {
    this.taskAssociatedItemOutput = {};

    if (this.componentData) {
      this.updateOpenMode(this.componentData.openMode);
      if (!!this.componentData.object) {
        this.taskAssociatedItemOutput = this.componentData.object;
      }
    }

    this.renderDropdown();
  }

  private renderDropdown(): void {
    this.propertiesService.getValue(GenericPropertyConstants.TASK_ITEM_TYPE_MAP).subscribe((results) => {
      this.taskItemList = results;
    });

    this.itemFormService.findBireItemVersions(this.bireItemDTOId).subscribe((results) => {
      this.itemVersionList = results;
    });
  }

  /**
   * Validate Screen
   */
  public onValidate() {
    if (this.validateScreen()) {
      this.onCreate.emit(this.taskAssociatedItemOutput);
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('entryOfValidRepairCenterisRequired'));
    }
  }

  /**
   * Close popup
   */
  public onCancel() {
    this.display = false;
  }

  /**
   * Is required fields filled ?
   */
  private validateScreen(): boolean {
    if (
      !!this.taskAssociatedItemOutput.code &&
      !!this.taskAssociatedItemOutput.itemVersion &&
      !!this.taskAssociatedItemOutput.type &&
      !!this.taskAssociatedItemOutput.version
    ) {
      return true;
    }

    return false;
  }

  /**
   * Opens task search dialog
   */
  public taskSearchCode() {
    this.showItemTaskSearchPopup = true;
  }

  /**
   * On task selection
   */
  public addTask(task: BireTaskDTO) {
    this.showItemTaskSearchPopup = false;
    this.taskAssociatedItemOutput.code = task.taskCode;
    this.taskAssociatedItemOutput.version = task.taskVersion;
    this.taskAssociatedItemOutput.designation = task.taskDesignation;
  }
}
