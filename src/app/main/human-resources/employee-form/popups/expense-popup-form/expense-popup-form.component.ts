import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { GenericPropertyConstants } from '../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { InputValidationService } from '../../../../../shared/services/input-validation.service';
import { MessageService } from '../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { BidtExpenseDTO } from '../../../../../shared/types/api-types/bidt-expense-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { PopupEntry } from '../../../../../shared/types/popup-entry.interface';

@Component({
  selector: 'aw-expense-popup-form',
  templateUrl: './expense-popup-form.component.html'
})
export class ExpensePopupFormComponent extends DialogComponent implements OnInit {
  @Input()
  public get display() {
    return this.displayValue;
  }

  public set display(displayValue) {
    this.displayValue = displayValue;
    this.displayChange.emit(this.displayValue);
  }

  @Input()
  public isReadOnlyForm: boolean;

  @Output()
  public displayChange: EventEmitter<boolean>;

  @Output()
  public onValidated: EventEmitter<BidtExpenseDTO>;

  @Input('component-data')
  public componentData: PopupEntry<BidtExpenseDTO>;

  public displayValue: boolean;

  public expenseDTO: BidtExpenseDTO;
  public isEditable: boolean;
  public expenseTypes: LabelValue<string>[];
  public expenseDate: Date;

  public constructor(
    public inputValidationService: InputValidationService,
    private readonly messageService: MessageService,
    public sessionService: SessionService,
    public propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Read, 'ExpensePopupFormComponent');

    this.displayChange = new EventEmitter<boolean>();
    this.onValidated = new EventEmitter<BidtExpenseDTO>();
    this.expenseDTO = {};
    this.expenseTypes = [];
    this.loadExpenseType();
  }

  public ngOnInit() {
    if (this.componentData && this.componentData.componentId && this.componentData.componentId.length > 0) {
      this.expenseDTO = this.componentData.object || {};
      if (this.expenseDTO && !!this.expenseDTO.expenseDate) {
        this.expenseDate = new Date(this.expenseDTO.expenseDate);
      }
      this.expenseDTO.expenseValue = this.expenseDTO.expenseValue || '0';
    }
  }

  public getTypeName(): string {
    return 'ExpensePopupFormComponent';
  }

  public validate(): void {
    if (this.expenseDTO.expenseType && this.expenseDTO.expenseValue && this.expenseDate) {
      this.expenseDTO.expenseDate = this.expenseDate.toISOString();
      this.onValidated.emit(this.expenseDTO);
      this.display = false;
    } else {
      this.messageService.showErrorMessage('global.missingFields');
    }
  }

  public cancel(): void {
    this.display = false;
  }

  private loadExpenseType(): void {
    this.propertiesService.getValue(GenericPropertyConstants.HR_EXPENSE_TYPE_MAP).subscribe((results) => {
      this.expenseTypes = JSON.parse(JSON.stringify(results)) as LabelValue<string>[];
      this.expenseTypes.map((element) => {
        element.value = element.label;
      });
    });
  }
}
