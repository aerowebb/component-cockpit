import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../shared/services/message.service';
import { SessionService } from '../../../../shared/services/session.service';
import { BidoOperationDTO } from '../../../../shared/types/api-types/bido-operation-dto.interface';
import { FlightOperationOutputDTO } from '../../../../shared/types/api-types/flight-operation-output-dto.interface';
import { DialogComponent } from '../../../../shared/types/dialog-component';
import { OperationSearchService } from '../operation-search.service';

@Component({
  selector: 'aw-dialog-operation',
  styleUrls: ['./dialog-operation.component.scss'],
  templateUrl: './dialog-operation.component.html'
})
export class DialogOperationComponent extends DialogComponent implements OnInit {
  public flightOperationOutputDTO: FlightOperationOutputDTO;
  @Input()
  public operation: BidoOperationDTO;
  @Input()
  public openMode: ComponentOpenMode;
  @Input()
  public isNew: boolean;
  @Output()
  public onValidated: EventEmitter<BidoOperationDTO>;

  public constructor(
    public readonly sessionService: SessionService,
    private readonly messageService: MessageService,
    private readonly operationSearchService: OperationSearchService
  ) {
    super(ComponentOpenMode.Read, 'DialogOperationComponent');

    this.onValidated = new EventEmitter<BidoOperationDTO>();
    this.flightOperationOutputDTO = { bidoOpearationDTO: {} };
  }

  public ngOnInit(): void {
    this.updateOpenMode(this.openMode);

    if (!this.operation) {
      this.operation = {};
    } else {
      this.operationSearchService.findBidoOperation(this.operation.operationCode).subscribe(
        (result) => {
          this.flightOperationOutputDTO = result;
        },
        () => {
          this.flightOperationOutputDTO.bidoOpearationDTO = this.operation;
        }
      );
    }
  }

  public cancel(): void {
    this.display = false;
  }

  public validate(): void {
    if (
      !!this.flightOperationOutputDTO.bidoOpearationDTO &&
      (!this.flightOperationOutputDTO.bidoOpearationDTO.operationCode ||
        this.flightOperationOutputDTO.bidoOpearationDTO.operationCode.length === 0)
    ) {
      this.messageService.showWarningMessage('global.warningOnMissingRequiredFields');
    } else {
      this.onValidated.emit(this.flightOperationOutputDTO.bidoOpearationDTO);
      this.display = false;
    }
  }
}
