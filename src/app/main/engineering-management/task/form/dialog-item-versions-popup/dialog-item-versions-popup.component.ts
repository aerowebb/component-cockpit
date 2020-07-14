import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { DialogTableData } from '../../../../../shared/components/dialog-table/types/dialog-table-data.interface';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { BireItemDTOId } from '../../../../../shared/types/api-types/bire-item-dto-id.interface';
import { BireItemDTO } from '../../../../../shared/types/api-types/bire-item-dto.interface';
import { BireTaskItemDTO } from '../../../../../shared/types/api-types/bire-task-item-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { TaskFormService } from '../task-form.service';

@Component({
  selector: 'aw-dialog-item-versions-popup',
  templateUrl: './dialog-item-versions-popup.component.html'
})
export class DialogItemVersionsPopupComponent extends DialogComponent implements OnInit {
  @Input()
  public item: BireTaskItemDTO;
  @Input()
  public isReadOnlyForm: boolean;
  @Output()
  public onAdded: EventEmitter<BireTaskItemDTO>;

  public readonly componentId: string;

  public itemGroup: string; // concatenate chapter-section-subject-sheet-marks

  public versions: LabelValue<string>[];
  public linkTypes: LabelValue<string>[];

  public displayValue: boolean;

  public itemTableData: DialogTableData<BireItemDTO>;
  public showItemTableDialog: boolean;

  public inputBireItemDTOId: BireItemDTOId;

  public resultsTable: BireItemDTO[];

  public constructor(
    private readonly messageService: MessageService,
    private readonly propertiesService: PropertiesService,
    private readonly taskFormService: TaskFormService
  ) {
    super(ComponentOpenMode.Write, 'DialogItemVersionsPopupComponent');

    this.onAdded = new EventEmitter<BireTaskItemDTO>();

    this.versions = [];

    this.linkTypes = [];
    this.loadLinkTypes();
  }

  public ngOnInit() {
    if (!this.item) {
      this.item = {};
    }
    this.init();
  }

  private init(): void {
    if (!!this.item) {
      if (
        !!this.item &&
        !!this.item.familyCode &&
        !!this.item.variantCode &&
        !!this.item.structureType &&
        !!this.item.chapter &&
        !!this.item.section &&
        !!this.item.subject &&
        !!this.item.sheet &&
        !!this.item.marks
      ) {
        const versionInput: BireItemDTOId = {
          familyCode: this.item.familyCode,
          variantCode: this.item.variantCode,
          structureType: this.item.structureType,
          chapter: this.item.chapter,
          section: this.item.section,
          subject: this.item.subject,
          sheet: this.item.sheet,
          marks: this.item.marks
        };

        this.loadVersions(versionInput);
      }
    } else {
      super.throwUnboundLocalError('ngOnInit', 'this.item');
    }
  }

  public cancel(): void {
    this.display = false;
  }

  public isValidItem(): boolean {
    if (
      !!this.item &&
      this.item.familyCode &&
      this.item.chapter &&
      this.item.versionNumber &&
      this.item.taskItemTypeCode
    ) {
      return true;
    } else {
      return false;
    }
  }

  public openItemTableDialog(): void {
    this.showItemTableDialog = true;
  }

  public add(): void {
    if (!!this.item) {
      this.onAdded.emit(this.item);
      this.display = false;
    } else {
      super.throwUnboundLocalError('add', 'this.item');
    }
  }

  public checkFamilyVariantAndItem() {
    if (!!this.item && !this.item.chapter) {
      this.messageService.showErrorMessage(this.getComponentName() + '.selectFamilyVariantAndItem');
    }
  }

  private loadVersions(bireItemDTOId: BireItemDTOId): void {
    this.taskFormService.findBireItemVersionsByItem(bireItemDTOId).subscribe(
      (results) => {
        this.versions = results || [];
      },
      () => {
        this.messageService.showErrorMessage(this.getComponentName() + '.errorOnFindItemVersions');
      }
    );
  }

  private loadLinkTypes(): void {
    this.propertiesService.getValue('getTaskItemTypeMap').subscribe(
      (results) => {
        this.linkTypes = results || [];
      },
      () => {
        this.messageService.showErrorMessage(this.getComponentName() + '.errorOnGetEvolutionLinkTypes');
      }
    );
  }

  /**************************************************************************
   * Item Dialog
   *************************************************************************/

  public onSelectedItem(item: BireItemDTO): void {
    if (!!this.item && item) {
      this.item.familyCode = item.familyCode;
      this.item.variantCode = item.variantCode;
      this.item.structureType = item.structureType;
      this.item.chapter = item.chapter;
      this.item.section = item.section;
      this.item.subject = item.subject;
      this.item.sheet = item.sheet;
      this.item.marks = item.marks;

      if (
        !!item &&
        !!item.familyCode &&
        !!item.variantCode &&
        !!item.structureType &&
        !!item.chapter &&
        !!item.section &&
        !!item.subject &&
        !!item.sheet &&
        !!item.marks
      ) {
        this.inputBireItemDTOId = {
          familyCode: item.familyCode,
          variantCode: item.variantCode,
          structureType: item.structureType,
          chapter: item.chapter,
          section: item.section,
          subject: item.subject,
          sheet: item.sheet,
          marks: item.marks
        };

        this.loadVersions(this.inputBireItemDTOId);
      }
    } else {
      super.throwUnboundLocalError('onSelectedItem', 'this.item');
    }
  }
}
