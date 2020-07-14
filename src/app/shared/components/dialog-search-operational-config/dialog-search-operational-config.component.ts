import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { BidoFlDTO } from '../../types/api-types/bido-fl-dto.interface';
import { BidoMissionEquipmentDTO } from '../../types/api-types/bido-mission-equipment-dto.interface';
import { DialogComponent } from '../../types/dialog-component';
import { TableDataSource } from '../table/table-data-source';

@Component({
  selector: 'aw-dialog-search-operational-config',
  templateUrl: 'dialog-search-operational-config.component.html'
})
export class DialogSearchOperationalConfigComponent extends DialogComponent {
  @Input('operationalConfigs')
  public set operationalConfigurations(requestedOpeConfigCodeArray: BidoFlDTO[]) {
    this.configTableDataSource.setData(requestedOpeConfigCodeArray);
  }

  public configTableDataSource: TableDataSource<BidoFlDTO>;

  @Output()
  public requestedOpeConfigCodeSelected = new EventEmitter<BidoFlDTO>();

  public searchObject: BidoMissionEquipmentDTO;

  @Input('config-name')
  public set configName(configName: string) {
    this.searchObject = {};
    this.searchObject.requestedOpeConfigCode = configName;
  }

  @Input('config-status')
  public set configStatus(configStatus: string) {
    this.searchObject.requestedOpeConfigDetails = configStatus;
  }

  public constructor() {
    super(ComponentOpenMode.Write, 'DialogSearchOperationalConfigComponent');

    this.searchObject = {};
    this.initConfigTableDataSource();
  }

  private initConfigTableDataSource() {
    this.configTableDataSource = new TableDataSource({
      allowMultiSelect: false,
      columns: [
        {
          field: 'flCode',
          translateKey: this.getTranslateKey('requestedOpeConfigCode')
        },
        {
          field: 'statusState',
          translateKey: this.getTranslateKey('requestedOpeConfigDetails')
        }
      ],
      data: []
    });
  }

  /*
    <summary>Emit the selectedObject on validate</summary>
    */
  public onValidate(): void {
    this.requestedOpeConfigCodeSelected.emit(this.configTableDataSource.dataSelection[0]);
    this.display = false;
  }

  /*
    <summary>Close the pop up on cancel</summary>
    */
  public onCancel(): void {
    this.display = false;
  }
}
