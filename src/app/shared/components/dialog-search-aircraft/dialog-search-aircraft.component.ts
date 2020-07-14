import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { finalize } from 'rxjs/operators';

import { GenericPropertyConstants } from '../../constants/generic-property-constants';
import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { PropertiesService } from '../../services/properties.service';
import { FindAllAircraftByCriteriaInput } from '../../types/api-input-types/fleet-management/find-all-aircraft-by-criteria-input.interface';
import { BidoEquipmentDTO } from '../../types/api-types/bido-equipment-dto.interface';
import { SearchResultsDTO } from '../../types/api-types/search-results-dto.interface';
import { DialogComponent } from '../../types/dialog-component';
import { TableColumn } from '../../types/table-column.interface';
import { ListUtils } from '../../utils/list-utils';
import { StringUtils } from '../../utils/string-utils';

import { DialogSearchAircraftService } from './dialog-search-aircraft.service';

interface AircraftRow {
  designation: string;
  familyVariant: string;
  msn: string;
  operator: string;
  registration: string;
  status: string;
  _obj: BidoEquipmentDTO;
}

@Component({
  selector: 'aw-dialog-search-aircraft',
  templateUrl: 'dialog-search-aircraft.component.html'
})
export class DialogSearchAircraftComponent extends DialogComponent implements OnInit {
  @Input()
  public searchObject: BidoEquipmentDTO;

  @Output()
  public onValidated: EventEmitter<BidoEquipmentDTO>;

  public statusList: SelectItem[];
  public table: SearchResultsDTO<AircraftRow>;
  public tableColList: TableColumn[];
  public tableLoading: boolean;
  public tableSelection: AircraftRow | undefined;

  public constructor(
    private readonly dialogSearchAircraftService: DialogSearchAircraftService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Write, 'DialogSearchAircraftComponent');

    this.onBeforeLoadOnce();
    this.onBeforeLoad();
  }

  // ****************************************************************************

  public ngOnInit(): void {
    this.searchObject = this.searchObject || {};
  }

  // ****************************************************************************

  public onBeforeLoad(): void {
    this.statusList = [];
    this.tableLoading = false;

    this.clearTableData();
  }

  private onBeforeLoadOnce(): void {
    this.onValidated = new EventEmitter<BidoEquipmentDTO>();

    this.loadStatusList();
    this.setTableColList();
  }

  // ****************************************************************************

  public search(): void {
    this.tableLoading = true;
    this.clearTableData();

    const input: FindAllAircraftByCriteriaInput = {
      bidoEquipmentDTO: this.searchObject
    };
    this.dialogSearchAircraftService
      .findAllAircraftByCriteria(input)
      .pipe(
        finalize(() => {
          this.tableLoading = false;
        })
      )
      .subscribe((results) => {
        this.table.list = ListUtils.orEmpty(results.list)
          .filter((result) => !StringUtils.isNullOrEmpty(result.equipmentCode))
          .map((result) => this.createAircraftRow(result));
        this.table.moreResults = results.moreResults;
      });
  }

  public validate(): void {
    this.onValidated.emit((this.tableSelection as AircraftRow)._obj);
    super.closeDialog();
  }

  private clearTableData(): void {
    this.table = { list: [], moreResults: false };
    this.tableSelection = undefined;
  }

  private createAircraftRow(obj: BidoEquipmentDTO): AircraftRow {
    const selectedStatus = this.statusList.find((elt) => elt.value === obj.statusState);

    const aircraftRow: AircraftRow = {
      designation: StringUtils.orEmpty(obj.equipmentDesignation),
      familyVariant: StringUtils.orEmpty(obj.familyVariantCode),
      msn: StringUtils.orEmpty(obj.sn),
      operator: StringUtils.orEmpty(obj.operatorCustomerCode),
      registration: StringUtils.orEmpty(obj.registration),
      status: selectedStatus ? StringUtils.orEmpty(selectedStatus.label) : '',
      _obj: obj
    };

    return aircraftRow;
  }

  private loadStatusList() {
    this.propertiesService.getValue(GenericPropertyConstants.OPERATIONAL_STATUS_MAP).subscribe((results) => {
      this.statusList = ListUtils.orEmpty(results);
    });
  }

  private setTableColList(): void {
    this.tableColList = [
      { field: 'msn', alignment: 'left', width: '15%' },
      { field: 'registration', alignment: 'left', width: '15%' },
      { field: 'designation', alignment: 'left', width: '25%' },
      { field: 'operator', alignment: 'left', width: '15%' },
      { field: 'status', alignment: 'left', width: '15%' },
      { field: 'familyVariant', alignment: 'left', width: '15%' }
    ];
  }
}
