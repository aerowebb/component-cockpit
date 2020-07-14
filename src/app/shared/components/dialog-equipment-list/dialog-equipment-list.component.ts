import { Component, EventEmitter, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';

import { BidoEquipmentLWO } from '../../../shared/types/api-output-types/fleet-management/bido-equipment-lwo.interface';
import { BidoEquipmentDTO } from '../../../shared/types/api-types/bido-equipment-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { DialogComponent } from '../../../shared/types/dialog-component';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { GenericPropertyConstants } from '../../constants/generic-property-constants';
import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { MessageService } from '../../services/message.service';
import { PropertiesService } from '../../services/properties.service';
import { SelectItemUtils } from '../../utils/select-item-utils';
import { TableUtils } from '../../utils/table-utils';

import { DialogEquipmentListService } from './dialog-equipment-list.service';

@Component({
  selector: 'aw-dialog-equipment-list',
  styleUrls: ['dialog-equipment-list.component.scss'],
  templateUrl: 'dialog-equipment-list.component.html'
})
export class DialogEquipmentListComponent extends DialogComponent {
  @Output()
  public onValidated: EventEmitter<BidoEquipmentLWO>;

  public displayedEquipmentRowNb: number;
  public equipmenTable: SearchResultsDTO<BidoEquipmentLWO>;
  public equipmenTableCols: TableColumn[];
  public functionList: SelectItem[];
  public searchObject: BidoEquipmentDTO;
  public selectedEquipment: BidoEquipmentLWO | undefined;
  public statusList: SelectItem[];

  public constructor(
    private readonly dialogEquipmentListService: DialogEquipmentListService,
    private readonly messageService: MessageService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Write, 'DialogEquipmentListComponent');

    this.onValidated = new EventEmitter<BidoEquipmentLWO>();

    this.displayedEquipmentRowNb = 0;
    this.equipmenTable = { list: [], moreResults: false };
    this.searchObject = {};
    this.selectedEquipment = undefined;

    this.loadFunctionList();
    this.loadStatusList();

    this.initTableCols();
  }

  public search(): void {
    this.dialogEquipmentListService.findAllBidoEquipmentByCriteria(this.searchObject).subscribe((result) => {
      if (!!result) {
        this.equipmenTable = result;
        this.equipmenTable.list = TableUtils.removeEmptyRows(this.equipmenTable.list, this.equipmenTableCols);

        this.displayedEquipmentRowNb = this.equipmenTable.list.length;
      }

      this.selectedEquipment = undefined;
    });
  }

  public updateDisplayedEquipmentRowNb(value: number): void {
    this.displayedEquipmentRowNb = value;
  }

  public validate(): void {
    if (!this.selectedEquipment) {
      this.messageService.showWarningMessage(this.getTranslateKey('warningOnNoSelection'));
    } else {
      this.onValidated.emit(this.selectedEquipment);
      this.closeDialog();
    }
  }

  private initTableCols(): void {
    this.equipmenTableCols = [
      { field: 'equipmentCode', width: '8rem' },
      { field: 'pnCode', width: '8rem' },
      { field: 'sn', width: '8rem' },
      { field: 'equipmentDesignation', width: '16rem' },
      { field: 'registration', width: '8rem' },
      { field: 'fatherEquipment', width: '12rem' },
      { field: 'equipmentFunction', width: '6rem' },
      { field: 'modelCode', width: '8rem' },
      { field: 'operatorCustomerCode', width: '6rem' },
      { field: 'operationalStatus', width: '8rem' },
      { field: 'familyVariantCode', width: '8rem' }
    ];
  }

  private loadFunctionList(): void {
    this.propertiesService
      .getValue(GenericPropertyConstants.ITEM_FAMILY_CODE_MAP)
      .subscribe((results) => (this.functionList = !!results ? SelectItemUtils.fromLabelValues(results) : []));
  }

  private loadStatusList(): void {
    this.propertiesService
      .getValue(GenericPropertyConstants.OPERATIONAL_STATUS_MAP)
      .subscribe((results) => (this.statusList = !!results ? SelectItemUtils.fromLabelValues(results) : []));
  }
}
