import { Component, EventEmitter, Input, Output } from '@angular/core';

import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { SessionService } from '../../../../../shared/services/session.service';
import { StockInformationDTO } from '../../../../../shared/types/api-types/stock-information-dto-interface';
import { GenericComponent } from '../../../../../shared/types/generic-component';
import { LabelValue } from '../../../../../shared/types/label-value.interface';

interface StockViewTableFilter {
  pn?: string;
  siteId?: string;
  warehouseId?: string;
  areaId?: string;
  storageBinId?: string;
  stockIssueDate?: Date;
}

interface DropdownListInterface {
  pnList: LabelValue<string>[];
  siteList: LabelValue<string>[];
  woList: LabelValue<string>[];
  areaList: LabelValue<string>[];
  storageBinList: LabelValue<string>[];
}

@Component({
  selector: 'aw-stock-view-filter',
  templateUrl: './stock-view-filter.component.html',
  styleUrls: ['./stock-view-filter.component.scss']
})
export class StockViewFilterComponent extends GenericComponent {
  @Input('stockInformationTable')
  public set setDropdownData(data: StockInformationDTO[]) {
    this.initDropdown();
    if (!!data && data.length) {
      data.forEach((element) => {
        this.setDropdowns(element);
      });
    }
  }

  @Input()
  public familyCodeMap: Map<string, string>;

  @Output()
  public onFilter: EventEmitter<StockViewTableFilter>;

  public listInterface: DropdownListInterface;
  public searchCriteria: StockViewTableFilter;

  public constructor(public readonly sessionService: SessionService) {
    super(ComponentOpenMode.Write);
    this.init();
  }

  public getComponentName(): string {
    return 'StockViewFilterComponent';
  }

  private init(): void {
    this.onFilter = new EventEmitter<StockViewTableFilter>();
    this.initDropdown();
  }

  /*********************************************
   * INITILIZE DROPDOWNS
   ********************************************/
  private initDropdown() {
    this.listInterface = {
      siteList: [],
      pnList: [],
      woList: [],
      areaList: [],
      storageBinList: []
    };
    this.searchCriteria = {};
  }

  public reset(): void {
    this.searchCriteria = {};
  }

  private setDropdowns(eleClone: StockInformationDTO): void {
    if (!!this.listInterface) {
      if (eleClone && eleClone.siteId && this.listInterface.siteList) {
        const isPresent = this.listInterface.siteList.filter((res) => res.value === eleClone.siteId);

        if (isPresent.length === 0) {
          this.listInterface.siteList.push({
            label: eleClone.siteText || eleClone.siteId,
            value: eleClone.siteId
          });
        }
      }

      if (eleClone && eleClone.warehouseId && this.listInterface.woList) {
        const isPresent = this.listInterface.woList.filter((res) => res.value === eleClone.warehouseId);

        if (isPresent.length === 0) {
          this.listInterface.woList.push({
            label: eleClone.warehouseText || eleClone.warehouseText,
            value: eleClone.warehouseId
          });
        }
      }

      if (eleClone && eleClone.pn && this.listInterface.pnList) {
        const isPresent = this.listInterface.pnList.filter((res) => res.value === eleClone.pn);

        if (isPresent.length === 0) {
          this.listInterface.pnList.push({
            label: eleClone.pn,
            value: eleClone.pn
          });
        }
      }

      if (eleClone && eleClone.areaId && this.listInterface.areaList) {
        const isPresent = this.listInterface.areaList.filter((res) => res.value === eleClone.areaId);

        if (isPresent.length === 0) {
          this.listInterface.areaList.push({
            label: eleClone.areaText || eleClone.areaId,
            value: eleClone.areaId
          });
        }
      }

      if (eleClone && eleClone.storageBinId && this.listInterface.storageBinList) {
        const isPresent = this.listInterface.storageBinList.filter((res) => res.value === eleClone.storageBinId);

        if (isPresent.length === 0) {
          this.listInterface.storageBinList.push({
            label: eleClone.storageBinText || eleClone.storageBinId,
            value: eleClone.storageBinId
          });
        }
      }
    }
  }

  public filter(): void {
    // todo: need to implemented for planned date
    this.onFilter.emit(this.searchCriteria);
  }
}
