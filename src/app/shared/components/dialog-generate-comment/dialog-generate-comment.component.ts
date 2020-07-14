import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { ConfirmationService } from '../../services/confirmation.service';
import { InputValidationService } from '../../services/input-validation.service';
import { SessionService } from '../../services/session.service';
import { BireEvolutionDTO } from '../../types/api-types/bire-evolution-dto.interface';
import { BireModificationDTO } from '../../types/api-types/bire-modification-dto.interface';
import { BireSbDTO } from '../../types/api-types/bire-sb-dto.interface';
import { ConditionTagInput } from '../../types/component-input-types/engineering-management/condition-tag-input.interface';
import { DialogComponent } from '../../types/dialog-component';
import { LabelValue } from '../../types/label-value.interface';
import { PopupEntry } from '../../types/popup-entry.interface';
import { TableColumn } from '../../types/table-column.interface';

import { DialogGenerateCommentService } from './dialog-generate-comment.service';

interface RulesRow {
  rowIndex?: number;
  type?: string;
  applicabilityCode?: string;
  periodicity?: string;
  comment?: string;
  _obj?: ConditionTagInput;
}

@Component({
  selector: 'aw-dialog-generate-comment',
  styleUrls: ['./dialog-generate-comment.component.scss'],
  templateUrl: './dialog-generate-comment.component.html'
})
export class DialogGenerateCommentComponent extends DialogComponent implements OnInit {
  @Input()
  public componentData: PopupEntry<string>;
  @Output()
  public onValidate: EventEmitter<string>;

  public ruleTypeList: LabelValue<string>[];
  public ruleData: RulesRow;
  public rulesTable: RulesRow[];
  public rulesTableColList: TableColumn[];
  public rulesTableSelectedList: RulesRow[];
  public showPanel: boolean;
  public isCounterDisable: boolean;
  public mainComment: string;
  public comments: string;
  public rulesDisplayedRowNb: number;
  public showSbadDialog: boolean;
  public showEvolutionTableDialog: boolean;
  public showModificationTableDialog: boolean;
  public sbadDialogType: string;

  public constructor(
    public dialogGenerateCommentService: DialogGenerateCommentService,
    public sessionService: SessionService,
    public inputValidationService: InputValidationService,
    private readonly confirmationService: ConfirmationService
  ) {
    super(ComponentOpenMode.Read, 'DialogGenerateCommentComponent');

    this.onValidate = new EventEmitter<string>();
    this.init();
    this.initRulesTableColList();
    this.loadRuleTypeDropDown();
  }

  public ngOnInit(): void {
    if (this.componentData && this.componentData.componentId && !!this.componentData.object) {
      this.comments = this.componentData.object;
      this.load();
    }
  }

  public loadRuleTypeDropDown() {
    this.dialogGenerateCommentService.getTypeSelectedDropDown().subscribe((results) => {
      this.ruleTypeList = results;
    });
  }

  private initRulesTableColList(): void {
    this.rulesTableColList = [
      { field: 'type', alignment: 'left', width: '25%' },
      { field: 'applicabilityCode', alignment: 'left', width: '25%' },
      { field: 'periodicity', alignment: 'left', width: '25%' },
      { field: 'comment', alignment: 'left', width: '25%' }
    ];
  }

  private load(): void {
    this.rulesTable = [];
    if (this.comments) {
      try {
        const inputList: ConditionTagInput[] = JSON.parse(this.comments) as ConditionTagInput[];
        let rowIndex = 0;
        inputList.forEach((element, index) => {
          if (index === 0) {
            this.mainComment = inputList[index].comment || '';
          } else {
            if (element.rule && element.rule.applicabilitiesCode.length > 1) {
              element.rule.applicabilitiesCode.forEach((obj) => {
                if (element.rule) {
                  element.rule.applicabilitiesCode = [obj];
                }
                this.rulesTable.push(this.createRulesRow({ ...element }, rowIndex));
                rowIndex++;
              });
            } else {
              this.rulesTable.push(this.createRulesRow({ ...element }, rowIndex));
              rowIndex++;
            }
          }
        });
      } catch (e) {
        this.mainComment = this.comments;
      }
    }
  }

  public saveCommentAndRules(): void {
    if (this.ruleData.type && this.ruleData.applicabilityCode && this.ruleData.periodicity) {
      if (this.rulesTableSelectedList.length === 1) {
        const index = this.rulesTableSelectedList[0].rowIndex || 0;

        const commentData: ConditionTagInput = {
          comment: this.ruleData.comment,
          rule: {
            type: this.ruleData.type,
            applicabilitiesCode: [this.ruleData.applicabilityCode],
            periodicity: this.ruleData.periodicity
          }
        };

        this.rulesTable[index] = { ...this.createRulesRow(commentData, index) };
      } else {
        const commentData: ConditionTagInput = {
          comment: this.ruleData.comment,
          rule: {
            type: this.ruleData.type,
            applicabilitiesCode: [this.ruleData.applicabilityCode],
            periodicity: this.ruleData.periodicity
          }
        };

        this.rulesTable.push(this.createRulesRow({ ...commentData }, this.rulesTable.length));
      }
      this.showPanel = false;
      this.rulesTableSelectedList = [];
    }
  }

  private createRulesRow(element: ConditionTagInput, index: number): RulesRow {
    const row: RulesRow = {
      rowIndex: index,
      comment: element.comment,
      periodicity: element.rule && element.rule.periodicity,
      applicabilityCode: element.rule && element.rule.applicabilitiesCode && element.rule.applicabilitiesCode[0],
      type: element.rule && element.rule.type,
      _obj: element
    };

    return row;
  }

  private init(): void {
    this.ruleData = {
      type: 'EVOL'
    };
    this.rulesTable = [];
    this.rulesTableSelectedList = [];
    this.showPanel = false;
  }

  public toggleOpenMode(): void {
    this.showPanel = !this.showPanel;
    if (this.rulesTableSelectedList.length === 1) {
      this.ruleData = { ...this.rulesTableSelectedList[0] };
    } else {
      this.ruleData = { type: 'EVOL' };
    }
  }

  public deleteRules(): void {
    this.confirmationService.confirmDelete({
      messageKey: 'global.confirmSelectedDataDelete',
      accept: () => {
        this.rulesTableSelectedList.forEach((selectedObj) => {
          const index = selectedObj.rowIndex || 0;
          this.rulesTable.splice(index, 1);
        });
        this.rulesTableSelectedList = [];
      }
    });
  }

  // tslint:disable-next-line:no-any
  public onRulesFilter(event: any): void {
    this.rulesDisplayedRowNb = event.filteredValue.length;
  }

  public closeDialog(): void {
    const comment: ConditionTagInput[] = [];
    // add main comment
    const mainComment: ConditionTagInput = {
      comment: this.mainComment || ''
    };
    comment.push(mainComment);

    // add rule data
    const mapData: Map<string, ConditionTagInput> = new Map<string, ConditionTagInput>();
    this.rulesTable.forEach((row) => {
      if (row.type && row.periodicity && row.applicabilityCode && row._obj) {
        const id = row.type + row.periodicity + (row.comment || '');
        if (!mapData.get(id)) {
          mapData.set(id, row._obj);
        } else {
          const data: ConditionTagInput | undefined = mapData.get(id);
          if (data && data.rule) {
            const applicability = data.rule.applicabilitiesCode || [];
            applicability.push(row.applicabilityCode);
            data.rule.applicabilitiesCode = applicability;
            mapData.set(id, data);
          }
        }
      }
    });

    mapData.forEach((value) => {
      comment.push(value);
    });

    this.onValidate.emit(JSON.stringify(comment));
    super.closeDialog();
  }

  public validateData(): boolean {
    return !this.ruleData.type || !this.ruleData.applicabilityCode || !this.ruleData.periodicity;
  }

  public onRowSelect(): void {
    this.showPanel = false;
  }

  public showEvol(): void {
    this.showEvolutionTableDialog = true;
  }

  public showSb(): void {
    this.showSbadDialog = true;
    this.sbadDialogType = 'SB';
  }

  public showAd(): void {
    this.showSbadDialog = true;
    this.sbadDialogType = 'AD';
  }

  public showMod(): void {
    this.showModificationTableDialog = true;
  }

  public onSelectedEvolution(customerEvolution: BireEvolutionDTO): void {
    if (!!customerEvolution) {
      this.ruleData.applicabilityCode = `${customerEvolution.evolutionNumber}:${
        customerEvolution.evolutionRevisionNumber
      }`;
    }
    this.showEvolutionTableDialog = false;
  }

  public setSelectedObject(selectedObject: BireSbDTO) {
    if (selectedObject) {
      this.ruleData.applicabilityCode = `${selectedObject.sbNumber}:${selectedObject.sbRevisionNumber}`;
    }
    this.showSbadDialog = false;
  }

  public setSelectedModification(selectedObject: BireModificationDTO) {
    if (selectedObject) {
      this.ruleData.applicabilityCode = `${selectedObject.modificationNumber}:${
        selectedObject.modificationRevisionNumber
      }`;
    }
    this.showModificationTableDialog = false;
  }

  public changeType() {
    this.ruleData.applicabilityCode = undefined;
    this.ruleData.comment = undefined;
    this.ruleData.periodicity = undefined;
  }
}
