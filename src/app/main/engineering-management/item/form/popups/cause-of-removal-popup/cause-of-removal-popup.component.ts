import { Component, EventEmitter, Output } from '@angular/core';

import { TableDataSource } from '../../../../../../shared/components/table/table-data-source';
import { GenericPropertyConstants } from '../../../../../../shared/constants/generic-property-constants';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { MessageService } from '../../../../../../shared/services/message.service';
import { PropertiesService } from '../../../../../../shared/services/properties.service';
import { BireReturnItemCustomDTO } from '../../../../../../shared/types/api-output-types/task-management/bire-return-item-custom-dto.interface';
import { BireReturnItemDTO } from '../../../../../../shared/types/api-types/bire-return-item-dto.interface';
import { BireReturnReasonDTO } from '../../../../../../shared/types/api-types/bire-return-reason-dto.interface';
import { DialogComponent } from '../../../../../../shared/types/dialog-component';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
import { ListUtils } from '../../../../../../shared/utils/list-utils';
import { StringUtils } from '../../../../../../shared/utils/string-utils';
import { ItemFormService } from '../../../form/item-form.service';

interface CauseOfRemovalRow {
  returnReasonCode: string;
  returnReasonName: string;
  returnReasonDescription: string;
  causeType: string;
  _obj: BireReturnItemCustomDTO;
}

@Component({
  selector: 'aw-cause-of-removal-popup',
  templateUrl: './cause-of-removal-popup.component.html'
})
export class CauseOfRemovalPopupComponent extends DialogComponent {
  @Output()
  public onCreate: EventEmitter<BireReturnItemCustomDTO[]>;
  public causeOfRemovalDataSource: TableDataSource<CauseOfRemovalRow>;

  public bireReturnItemDTO: BireReturnItemDTO;

  private causeTypeList: LabelValue<string>[];

  public constructor(
    private readonly itemFormService: ItemFormService,
    private readonly messageService: MessageService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Write, 'CauseOfRemovalPopupComponent');
    this.onCreate = new EventEmitter<BireReturnItemCustomDTO[]>();
    this.init();

    this.loadCauseTypeList();
  }

  /**
   * Init screen
   */
  private init() {
    this.bireReturnItemDTO = {};
    this.causeOfRemovalDataSource = new TableDataSource({
      columns: [
        {
          field: 'returnReasonCode',
          translateKey: this.getTranslateKey('returnReasonCode'),
          width: '12.5%'
        },
        {
          field: 'returnReasonName',
          translateKey: this.getTranslateKey('returnReasonName'),
          width: '25.5%'
        },
        {
          field: 'returnReasonDescription',
          translateKey: this.getTranslateKey('returnReasonDescription'),
          width: '50.5%'
        },
        {
          field: 'causeType',
          translateKey: this.getTranslateKey('causeType'),
          width: '12.5%'
        }
      ],
      data: []
    });
  }

  private initilizeScreen() {
    // Repair Center List
    this.itemFormService.findAllBireReturnReasons().subscribe((results: BireReturnReasonDTO[]) => {
      this.causeOfRemovalDataSource.setData(
        ListUtils.orEmpty(results).map((result) => this.createCauseOfRemovalRow(result))
      );
    });
  }

  private createCauseOfRemovalRow(obj: BireReturnReasonDTO): CauseOfRemovalRow {
    const causeType = this.causeTypeList.find((elt) => elt.value === obj.causeType);

    const causeOfRemovalRow: CauseOfRemovalRow = {
      returnReasonCode: StringUtils.orEmpty(obj.returnReasonCode),
      returnReasonName: StringUtils.orEmpty(obj.returnReasonName),
      returnReasonDescription: StringUtils.orEmpty(obj.returnReasonDescription),
      causeType: causeType ? causeType.label : StringUtils.orEmpty(obj.causeType),
      _obj: obj
    };

    return causeOfRemovalRow;
  }

  /**
   * Validate Screen
   */
  public onValidate() {
    if (this.validateScreen()) {
      const selectedCauseList = this.causeOfRemovalDataSource.dataSelection.map((elt) => elt._obj);
      this.onCreate.emit(selectedCauseList);
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('entryOfValidRemovalisRequired'));
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
    if (this.causeOfRemovalDataSource.hasDataSelection) {
      return true;
    }

    return false;
  }

  private loadCauseTypeList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.CAUSE_TYPE_MAP).subscribe((results) => {
      this.causeTypeList = ListUtils.orEmpty(results);

      this.initilizeScreen();
    });
  }
}
