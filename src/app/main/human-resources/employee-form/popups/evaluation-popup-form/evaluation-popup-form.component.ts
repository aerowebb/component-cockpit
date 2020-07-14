import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { GenericPropertyConstants } from '../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../shared/services/properties.service';
import { SessionService } from '../../../../../shared/services/session.service';
import { BidtEvaluationsOutputDTO } from '../../../../../shared/types/api-output-types/bidt-employee/bidt-evaluations-output.interface';
import { BidtEmployeeDTO } from '../../../../../shared/types/api-types/bidt-employee-dto.interface';
import { BidtEvaluationDTO } from '../../../../../shared/types/api-types/bidt-evaluation-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';
import { PopupEntry } from '../../../../../shared/types/popup-entry.interface';

@Component({
  selector: 'aw-evaluation-popup-form',
  templateUrl: './evaluation-popup-form.component.html'
})
export class EvaluationPopupFormComponent extends DialogComponent implements OnInit {
  @Input()
  public get display() {
    return this.displayValue;
  }

  public set display(displayValue) {
    this.displayValue = displayValue;
    this.displayChange.emit(this.displayValue);
  }

  @Output()
  public displayChange: EventEmitter<boolean>;

  @Input()
  public isReadOnlyForm: boolean;

  @Output()
  public onValidated: EventEmitter<BidtEvaluationsOutputDTO>;

  @Input('component-data')
  public componentData: PopupEntry<BidtEvaluationsOutputDTO>;

  public displayValue: boolean;

  public evaluationDTO: BidtEvaluationDTO;
  public bidtEvaluationsOutputDTO: BidtEvaluationsOutputDTO;
  public isEditable: boolean;
  public evaluationTypes: LabelValue<string>[];
  public evaluationDate: Date;
  public showEvaluatorPopup: boolean;

  public constructor(
    private readonly messageService: MessageService,
    public sessionService: SessionService,
    public propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Read, 'EvaluationPopupFormComponent');

    this.showEvaluatorPopup = false;
    this.displayChange = new EventEmitter<boolean>();
    this.onValidated = new EventEmitter<BidtEvaluationsOutputDTO>();
    this.evaluationDTO = {};
    this.loadEvaluationType();
  }

  public ngOnInit() {
    if (this.componentData && this.componentData.componentId && this.componentData.componentId.length > 0) {
      this.bidtEvaluationsOutputDTO = this.componentData.object || {};
      this.bidtEvaluationsOutputDTO.bidtEvaluationDTO = this.bidtEvaluationsOutputDTO.bidtEvaluationDTO || {};
      this.evaluationDTO = this.bidtEvaluationsOutputDTO.bidtEvaluationDTO;
      if (this.evaluationDTO && !!this.evaluationDTO.evaluationDate) {
        this.evaluationDate = new Date(this.evaluationDTO.evaluationDate);
      }
    }
  }

  public getTypeName(): string {
    return 'EvaluationPopupFormComponent';
  }

  public validate(): void {
    if (this.evaluationDate && this.bidtEvaluationsOutputDTO.evaluator) {
      this.evaluationDTO.evaluationDate = this.evaluationDate.toISOString();
      this.onValidated.emit(this.bidtEvaluationsOutputDTO);
      this.display = false;
    } else {
      this.messageService.showErrorMessage('global.missingFields');
    }
  }

  public cancel(): void {
    this.display = false;
  }

  private loadEvaluationType(): void {
    this.propertiesService.getValue(GenericPropertyConstants.HR_EVALUATION_TYPE_MAP).subscribe((results) => {
      this.evaluationTypes = JSON.parse(JSON.stringify(results)) as LabelValue<string>[];
      this.evaluationTypes.map((evaluation) => {
        evaluation.value = evaluation.label;
      });
    });
  }

  public openEvaluatorPopup(): void {
    this.showEvaluatorPopup = this.isReadOnlyForm ? false : true;
  }

  public setSelectedEvaluator(evaluator: Event): void {
    this.bidtEvaluationsOutputDTO.evaluator = (evaluator as BidtEmployeeDTO).employeeLastName;
    this.evaluationDTO.bidtEmployeeByBidtEmployeeId2Id = (evaluator as BidtEmployeeDTO).id;
  }
}
