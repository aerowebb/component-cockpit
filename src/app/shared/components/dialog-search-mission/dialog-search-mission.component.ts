import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { GenericPropertyConstants } from '../../constants/generic-property-constants';
import { ComponentOpenMode } from '../../enums/component-open-mode.enum';
import { MessageService } from '../../services/message.service';
import { PropertiesService } from '../../services/properties.service';
import { BidoMissionDTO } from '../../types/api-types/bido-mission-dto.interface';
import { SearchResultsDTO } from '../../types/api-types/search-results-dto.interface';
import { DialogComponent } from '../../types/dialog-component';
import { LabelValue } from '../../types/label-value.interface';
import { TableColumn } from '../../types/table-column.interface';
import { ListUtils } from '../../utils/list-utils';
import { StringUtils } from '../../utils/string-utils';

import { DialogSearchMissionService } from './dialog-search-mission.service';

interface MissionRow {
  arrivalLocation: string;
  departureLocation: string;
  missionNumber: string;
  missionCode: string;
  missionType: string;
  _obj: BidoMissionDTO;
}

@Component({
  selector: 'aw-dialog-search-mission',
  templateUrl: 'dialog-search-mission.component.html'
})
export class DialogSearchMissionComponent extends DialogComponent implements OnInit {
  @Input()
  public searchObject: BidoMissionDTO;

  @Output()
  public onValidated = new EventEmitter<BidoMissionDTO>();

  public missionTypeList: LabelValue<string>[];
  public table: SearchResultsDTO<MissionRow>;
  public tableColList: TableColumn[];
  public tableLoading: boolean;
  public tableSelection: MissionRow | undefined;

  private flightBaseList: LabelValue<string>[];

  public constructor(
    private readonly dialogSearchMissionService: DialogSearchMissionService,
    private readonly messageService: MessageService,
    private readonly propertiesService: PropertiesService
  ) {
    super(ComponentOpenMode.Write, 'DialogSearchMissionComponent');

    this.init();

    this.loadFlightBaseList();
    this.loadMissionsTypeList();

    this.setTableColList();
  }

  public ngOnInit(): void {
    this.searchObject = this.searchObject || {};
  }

  public search(): void {
    this.tableLoading = true;
    this.clearTableData();

    this.dialogSearchMissionService.findAllBidoMissionByCriteria(this.searchObject).subscribe((result) => {
      if (result) {
        this.table.moreResults = result.moreResults;
        this.table.list = ListUtils.orEmpty(result.list)
          .filter((elt) => !StringUtils.isNullOrEmpty(elt.missionCode))
          .map((elt) => this.createMissionRow(elt));
      }
      this.tableLoading = false;
    });
  }

  public cancel(): void {
    super.closeDialog();
  }

  public validate(): void {
    if (!this.tableSelection) {
      this.messageService.showWarningMessage(this.getTranslateKey('warningOnNoSelection'));
    } else {
      this.onValidated.emit(this.tableSelection._obj);
      super.closeDialog();
    }
  }

  private clearTableData(): void {
    this.table = { list: [], moreResults: false };
    this.tableSelection = undefined;
  }

  private createMissionRow(obj: BidoMissionDTO): MissionRow {
    const selectedArrival = this.flightBaseList.find((elt) => elt.value === obj.arrivalLocation);
    const selectedDeparture = this.flightBaseList.find((elt) => elt.value === obj.departureLocation);
    const selectedMissionType = this.missionTypeList.find((elt) => elt.value === obj.missionType);

    const operationRow: MissionRow = {
      arrivalLocation: selectedArrival ? StringUtils.orEmpty(selectedArrival.label) : '',
      departureLocation: selectedDeparture ? StringUtils.orEmpty(selectedDeparture.label) : '',
      missionCode: StringUtils.orEmpty(obj.missionCode),
      missionNumber: StringUtils.orEmpty(obj.missionNumber),
      missionType: selectedMissionType ? StringUtils.orEmpty(selectedMissionType.label) : '',
      _obj: obj
    };

    return operationRow;
  }

  private init(): void {
    this.clearTableData();

    this.flightBaseList = [];
    this.missionTypeList = [];
    this.tableLoading = false;
  }

  private loadFlightBaseList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.FLIGHT_BASE_MAP).subscribe((results) => {
      this.flightBaseList = ListUtils.orEmpty(results);
    });
  }

  private loadMissionsTypeList(): void {
    this.propertiesService.getValue(GenericPropertyConstants.EVENT_MISSION_TYPE_MAP).subscribe((results) => {
      if (results) {
        this.missionTypeList = ListUtils.orEmpty(results);
      }
    });
  }

  private setTableColList(): void {
    this.tableColList = [
      { field: 'missionCode', alignment: 'left', width: '25%' },
      { field: 'missionType', alignment: 'left', width: '30%' },
      { field: 'missionNumber', alignment: 'left', width: '15%' },
      { field: 'departureLocation', alignment: 'left', width: '15%' },
      { field: 'arrivalLocation', alignment: 'left', width: '15%' }
    ];
  }
}
