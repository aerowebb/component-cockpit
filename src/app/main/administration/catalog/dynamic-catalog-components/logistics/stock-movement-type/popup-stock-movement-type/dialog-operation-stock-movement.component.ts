import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SelectItem } from 'primeng/api';

import { GenericPropertyConstants } from '../../../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../../../shared/services/properties.service';
import { SessionService } from '../../../../../../../shared/services/session.service';
import { BidtStockMvtTypeOperationDTO } from '../../../../../../../shared/types/api-types/bidt-stock-mvt-type-operation-dto.interface';
import { DialogComponent } from '../../../../../../../shared/types/dialog-component';
import { SelectItemUtils } from '../../../../../../../shared/utils/select-item-utils';
import { StringUtils } from '../../../../../../../shared/utils/string-utils';

@Component({
  selector: 'aw-dialog-operation-stock-movement',
  templateUrl: './dialog-operation-stock-movement.component.html'
})
export class DialogOperationStockMovementComponent extends DialogComponent implements OnInit {
  private static readonly NEW_OPERATION: string = 'newOperation';
  private static readonly EDIT_OPERATION: string = 'editOperation';

  @Input('data')
  public operation: BidtStockMvtTypeOperationDTO;

  @Input()
  public openMode: ComponentOpenMode;

  @Output()
  public onValidated: EventEmitter<BidtStockMvtTypeOperationDTO>;

  public component: typeof DialogOperationStockMovementComponent;

  public title: string;
  public operationList: SelectItem[];
  public taskTypes: SelectItem[];

  public constructor(
    public readonly messageService: MessageService,
    public readonly sessionService: SessionService,
    public readonly propertiesService: PropertiesService,
    private readonly translateService: TranslateService
  ) {
    super(ComponentOpenMode.Read, 'DialogOperationStockMovementComponent');
    this.component = DialogOperationStockMovementComponent;
    this.operationList = [];
    this.taskTypes = [];
    this.onValidated = new EventEmitter<BidtStockMvtTypeOperationDTO>();
  }

  public ngOnInit() {
    this.updateOpenMode(this.openMode);
    this.bindDropDowns();
    if (!this.operation) {
      this.operation = { bidtStockMvtType: '', pnTypes: [], docCategories: [] };
      this.title = this.getTranslatedValue(this.component.NEW_OPERATION);
    } else {
      this.title = this.getTranslatedValue(this.component.EDIT_OPERATION);
    }
  }

  public cancel(): void {
    this.display = false;
  }

  public validate(): void {
    this.onValidated.emit(this.operation);
    this.closeDialog();
  }

  private bindDropDowns(): void {
    this.propertiesService.getValue(GenericPropertyConstants.LOGISTICAL_OPERATION_MAP).subscribe((results) => {
      this.operationList = !!results ? SelectItemUtils.fromLabelValues(results) : [];
    });

    this.propertiesService.getValue(GenericPropertyConstants.TASK_TYPE_MAP).subscribe((results) => {
      this.taskTypes = !!results ? SelectItemUtils.fromLabelValues(results) : [];
    });
  }

  private getTranslatedValue(key: string): string {
    return this.translateService.instant(this.getTranslateKey(key));
  }

  public isValidForm(): boolean {
    return StringUtils.isNullOrEmpty(this.operation.smtoKey);
  }
}
