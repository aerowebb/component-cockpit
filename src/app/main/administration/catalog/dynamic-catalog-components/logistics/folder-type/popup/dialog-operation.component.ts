import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SelectItem } from 'primeng/api';

import { AWPropertiesConstants } from '../../../../../../../shared/constants/aw-properties-constants';
import { GenericPropertyConstants } from '../../../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../../../shared/services/properties.service';
import { SessionService } from '../../../../../../../shared/services/session.service';
import { BidtDfTypeOperationDTO } from '../../../../../../../shared/types/api-types/bidt-df-type-operation-dto.interface';
import { DialogComponent } from '../../../../../../../shared/types/dialog-component';
import { SelectItemUtils } from '../../../../../../../shared/utils/select-item-utils';
import { StringUtils } from '../../../../../../../shared/utils/string-utils';

@Component({
  selector: 'aw-dialog-operation-catalog',
  templateUrl: './dialog-operation.component.html'
})
export class DialogOperationCatalogComponent extends DialogComponent implements OnInit {
  private static readonly NEW_OPERATION: string = 'newOperation';
  private static readonly EDIT_OPERATION: string = 'editOperation';

  @Input('data')
  public operation: BidtDfTypeOperationDTO;

  @Input()
  public openMode: ComponentOpenMode;

  @Output()
  public onValidated: EventEmitter<BidtDfTypeOperationDTO>;

  public component: typeof DialogOperationCatalogComponent;

  public title: string;

  public elementTypes: SelectItem[];
  public taskTypes: SelectItem[];
  public operationList: SelectItem[];

  public constructor(
    public messageService: MessageService,
    public sessionService: SessionService,
    public propertiesService: PropertiesService,
    private readonly translateService: TranslateService
  ) {
    super(ComponentOpenMode.Read, 'DialogOperationCatalogComponent');
    this.component = DialogOperationCatalogComponent;
    this.elementTypes = [];
    this.taskTypes = [];
    this.onValidated = new EventEmitter<BidtDfTypeOperationDTO>();
  }

  public ngOnInit() {
    this.updateOpenMode(this.openMode);
    this.bindDropDowns();
    if (!this.operation) {
      this.operation = { bidtDfTypeId: 0, pnTypes: [], docCategories: [] };
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

    this.elementTypes = [
      { label: this.getTranslatedValue('item'), value: AWPropertiesConstants.DELIVERY_ELEMENT_TYPE_ITEM },
      { label: this.getTranslatedValue('package'), value: AWPropertiesConstants.DELIVERY_ELEMENT_TYPE_PACKAGE },
      { label: this.translateService.instant('asset'), value: AWPropertiesConstants.DELIVERY_ELEMENT_TYPE_ASSET }
    ];

    this.propertiesService.getValue('getTaskTypeMap').subscribe((results) => {
      this.taskTypes = !!results ? SelectItemUtils.fromLabelValues(results) : [];
    });
  }

  private getTranslatedValue(key: string): string {
    return this.translateService.instant(this.getTranslateKey(key));
  }

  public isValidForm(): boolean {
    return StringUtils.isNullOrEmpty(this.operation.dftopeKey) || StringUtils.isNullOrEmpty(this.operation.objectType);
  }
}
