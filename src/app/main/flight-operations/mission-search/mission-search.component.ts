import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SelectItem } from 'primeng/api';
import { Table } from 'primeng/table';
import { Observable } from 'rxjs';

import { ComponentConstants } from '../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../shared/services/confirmation.service';
import { DateService } from '../../../shared/services/date.service';
import { ExportService } from '../../../shared/services/export.service';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { SessionService } from '../../../shared/services/session.service';
import { TabService } from '../../../shared/services/tab.service';
import { BidoCustomerDTO } from '../../../shared/types/api-types/bido-customer-dto.interface';
import { BidoMissionDTOId } from '../../../shared/types/api-types/bido-mission-dto-id.interface';
import { BidoMissionDTO } from '../../../shared/types/api-types/bido-mission-dto.interface';
import { LabelValue } from '../../../shared/types/label-value.interface';
import { PageComponent } from '../../../shared/types/page-component';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { ListUtils } from '../../../shared/utils/list-utils';
import { StringUtils } from '../../../shared/utils/string-utils';
import { MissionFormService } from '../mission-form/mission-form.service';

import { MissionSearchService } from './mission-search.service';

export interface MissionRowExport {
  missionCode?: string;
  missionType?: string;
  missionNumber?: string;
  operationalMissionCode?: string;
  customerOperatorCode?: string;
  departureLocation?: string;
  arrivalLocation?: string;
  startDate?: string;
  endDate?: string;
  missionDuration?: string;
  cycleNumber?: string;
  periodicityType?: string;
  periodicityLimitDate?: string;
  _obj?: BidoMissionDTO;
}

@Component({
  selector: 'aw-mission-search',
  templateUrl: './mission-search.component.html'
})
export class MissionSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  public resultsTable: MissionRowExport[];
  public resultsTableCols: TableColumn[];
  public searchFields: BidoMissionDTO;
  public selectedMissions: MissionRowExport[];
  public missionTypeList: SelectItem[];
  public flightLocationList: SelectItem[];
  public periodicityType: LabelValue<string>[];
  public operationCode: LabelValue<string>[];
  public flightCustomerList: SelectItem[];
  private readonly resultsTableExportName: string;
  public keyMap: Map<string, Observable<LabelValue<string>[]>>;
  public isLoading: boolean = false;
  public showAdvancedCriteria: boolean;
  public hasCreateButton: boolean;

  /* HTML references ***********************************************************/

  @ViewChild('resultsContainerAnchor')
  public resultsContainerAnchor: ElementRef;

  /* ***************************************************************************/

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public translateService: TranslateService,
    private readonly missionSearchService: MissionSearchService,
    private readonly missionFormService: MissionFormService,
    private readonly exportService: ExportService,
    private readonly confirmationService: ConfirmationService,
    private readonly dateService: DateService,
    public readonly sessionService: SessionService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
    this.resultsTableExportName = 'mission-list';
    this.showAdvancedCriteria = false;
    this.resultsTable = [];
    this.selectedMissions = [];
    this.missionTypeList = [];
    this.flightLocationList = [];
    this.periodicityType = [];
    this.flightCustomerList = [];

    this.keyMap = new Map<string, Observable<LabelValue<string>[]>>();
    this.resetSearchCriteria();
    this.initTableCols();
    this.fillDropDown();
    this.initHasCreateButton();
    this.fillDropDown();
  }
  public initTableCols(): void {
    this.resultsTableCols = [
      { field: 'missionCode', alignment: 'left', width: '10%' },
      { field: 'missionType', alignment: 'left', width: '11%' },
      { field: 'missionNumber', alignment: 'left', width: '8%' },
      { field: 'operationalMissionCode', alignment: 'left', width: '12%' },
      { field: 'customerOperatorCode', alignment: 'left', width: '13%' },
      { field: 'departureLocation', alignment: 'left', width: '10%' },
      { field: 'arrivalLocation', alignment: 'left', width: '10%' },
      { field: 'startDate', alignment: 'left', width: '13%' },
      { field: 'endDate', alignment: 'left', width: '13%' }
    ];
  }

  public initHasCreateButton(): void {
    this.hasCreateButton = true;
  }

  public getComponentName(): string {
    return ComponentConstants.FLI_FLIGHTS_MISSION_SEARCH;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.displayComponentContext('global.search', true);
  }

  public deleteMissions(): void {
    const partialMessageKey =
      this.selectedMissions.length > 1 ? 'confirmDeleteSelectedMissions' : 'confirmDeleteSelectedMission';

    const missions: BidoMissionDTOId[] = [];
    this.selectedMissions.forEach((mission) => {
      if (mission && mission.missionCode) {
        const missionId: BidoMissionDTOId = {
          missionCode: mission.missionCode
        };
        missions.push(missionId);
      }
    });
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.missionSearchService.removeBidoMission(missions).subscribe(
          (result) => {
            this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteMission'));
            this.selectedMissions = [];
            this.search();
          },
          (error) => {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnDeleteMission'));
          }
        );
      }
    });
  }

  public exportTable(): void {
    const missionExportData: MissionRowExport[] = this.resultsTable.map((mission) => {
      const missionRowExport: MissionRowExport = {
        missionCode: mission.missionCode,
        missionType: mission.missionType,
        missionNumber: mission.missionNumber,
        operationalMissionCode: mission.operationalMissionCode,
        departureLocation: mission.departureLocation,
        arrivalLocation: mission.arrivalLocation,
        startDate: mission.startDate,
        endDate: mission.endDate,
        missionDuration: mission.missionDuration,
        cycleNumber: mission.cycleNumber,
        periodicityType: mission.periodicityType,
        periodicityLimitDate: mission.periodicityLimitDate
      };

      return missionRowExport;
    });
    this.exportService.toExcel(missionExportData, this.resultsTableExportName, this.componentData.componentId);
  }

  public openCreateMission(): void {
    this.openMission(undefined, ComponentOpenMode.Create);
  }

  public openMissionScreen(missionRow: MissionRowExport): void {
    this.openMission(missionRow, ComponentOpenMode.Read);
  }

  public openSelectedMissions(): void {
    this.selectedMissions.forEach((mission) => {
      if (mission) {
        if (StringUtils.isNullOrEmpty(mission.missionCode)) {
          this.messageService.showWarningMessage(this.getTranslateKey('errorOnMissingCustomerCode'));
        } else {
          this.openMission(mission, ComponentOpenMode.Read);
        }
      }
    });
  }

  public resetResultsTable(table: Table): void {
    table.reset();
    table.filters = {};
  }

  public resetSearchCriteria(): void {
    this.searchFields = {};
  }

  public search(): void {
    this.isLoading = true;
    super.scrollToAnchor(this.resultsContainerAnchor);
    this.missionSearchService.findBidoMissionsBySearchCriteria(this.searchFields).subscribe(
      (results) => {
        this.isLoading = false;
        if (results) {
          this.resultsTable = results.list.map((mission) => {
            const matchingOperationCode = this.operationCode.find((elt) => elt.value === mission.operationCode);

            const missionRow: MissionRowExport = {
              missionCode: mission.missionCode,
              missionType: mission.missionType,
              missionNumber: mission.missionNumber,
              operationalMissionCode: matchingOperationCode ? matchingOperationCode.label : '',
              customerOperatorCode: mission.customerOperatorCode,
              departureLocation: mission.departureLocation,
              arrivalLocation: mission.arrivalLocation,
              startDate: this.dateService.dateWithHourToString(mission.startDate),
              endDate: this.dateService.dateWithHourToString(mission.endDate),
              missionDuration: mission.missionDuration,
              cycleNumber: mission.cycleNumber,
              periodicityType: mission.periodicityType,
              periodicityLimitDate: this.dateService.dateToString(mission.periodicityLimitDate),
              _obj: mission
            };

            return missionRow;
          });
          this.resultsTable.forEach((element) => {
            this.missionTypeList.forEach((result) => {
              if (result.value === element.missionType) {
                element.missionType = result.label;
              }
            });
            this.flightLocationList.forEach((result) => {
              if (result.value === element.arrivalLocation) {
                element.arrivalLocation = result.label;
              }
            });
            this.flightLocationList.forEach((result) => {
              if (result.value === element.departureLocation) {
                element.departureLocation = result.label;
              }
            });

            this.periodicityType.forEach((result) => {
              if (result.value === element.periodicityType) {
                element.periodicityType = result.label;
              }
            });
          });
        }
      },
      () => {
        this.isLoading = false;
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetResults'));
      }
    );
    this.selectedMissions = [];
  }

  public toggleWorkPackageExpand(row: BidoMissionDTO): void {
    row._expand = !row._expand;
  }

  public openMission(object: MissionRowExport | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.MissionFormComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'MissionFormComponent',
      objectId: this.serializationService.serialize(object),
      openMode
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public fillDropDown() {
    this.loadFlightCustomerList();
    this.missionSearchService.getMissionTypeMap().subscribe((results) => {
      this.missionTypeList = results;
    });
    this.missionSearchService.getLocationTypeMap().subscribe((results) => {
      this.flightLocationList = results;
    });
    this.missionSearchService.getPeriodicityTypeMap().subscribe((result) => {
      this.periodicityType = result;
    });
    this.missionSearchService.findAllBidoOperations({}).subscribe((result) => {
      this.operationCode = result;
    });
  }

  private loadFlightCustomerList(): void {
    const criteria: BidoCustomerDTO = {
      isOperator: true
    };
    this.missionFormService.findAllBidoCustomerBySearchCriteria(criteria).subscribe((results) => {
      this.flightCustomerList = ListUtils.orEmpty(results)
        .filter((result) => !StringUtils.isNullOrEmpty(result.customerCode))
        .map((result) => {
          const label = StringUtils.isNullOrEmpty(result.customerName)
            ? result.customerCode
            : `${result.customerName} (${result.customerCode})`;

          return {
            label,
            value: result.customerCode as string
          };
        });
    });
  }
}
