import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { ISearchCriteria } from '../../../../shared/components/manage-search-criteria/search-criteria.interface';
import { AppConstants } from '../../../../shared/constants/app-constants';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { SearchCriteriaConstants } from '../../../../shared/constants/search-criteria.constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { DateService } from '../../../../shared/services/date.service';
import { ExportService } from '../../../../shared/services/export.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { InspectorWorkBenchSearchInput } from '../../../../shared/types/api-input-types/maintenance-component-cockpit/inspector-workbench-search-input-dto.interface';
import { ProjectSearchOutputDTO } from '../../../../shared/types/api-output-types/maintenance-component-cockpit/product-search-output-dto.interface';
import { BsdeProjectDTOId } from '../../../../shared/types/api-types/bsde-project-dto-id.interface';
import { BsdeProjectDTO } from '../../../../shared/types/api-types/bsde-project-dto.interface';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';

import { ComponentCockpitOperationSearchService } from './component-cockpit-operation-search.service';

interface ProjectSearchOutputUIDTO {
  projectNumber?: string;
  projectName?: string;
  pn?: string;
  sn?: string;
  startDate?: Date;
  startDateStr?: string;
  endDateStr?: string;
  mroCenter?: string;
  customer?: string;
  currentStatus?: string;
  lastUpdated?: string;
  lastUpdatedStr?: string;
  lastUpdatedBy?: string;
  statusState?: string;
  statusUser?: string;
  statusDate?: Date;
  bsdeProjectDTO?: BsdeProjectDTO;
  _expand?: boolean;
}

@Component({
  selector: 'aw-component-cockpit-operation-search',
  styleUrls: ['./component-cockpit-operation-search.component.scss'],
  templateUrl: './component-cockpit-operation-search.component.html'
})
export class ComponentCockpitOperationSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  private static readonly COCKPIT_TABLE_EXPORT_NAME: string = 'component-cockpit-list';

  @ViewChild('resultsContainerAnchor')
  public resultsContainerAnchor: ElementRef;
  public readonly SEARCH_CRITERIA_ID: string = AppConstants.BUSINESS_PARTNER_SEARCH_CRITERIA_ID;

  public showAdvancedCriteria: boolean;

  public searchObj: InspectorWorkBenchSearchInput;
  public criteriaToSave: InspectorWorkBenchSearchInput;
  public criteriaName: string | undefined;

  // Table
  public resultsTable: ProjectSearchOutputUIDTO[];
  public selectedRows: ProjectSearchOutputUIDTO[];
  public tableCols: TableColumn[];

  // Dropdowns
  public lastUpdateByList: LabelValue<string>[];
  public dateFilterList: LabelValue<string>[];
  public mroCenterList: LabelValue<string>[];
  public customerList: LabelValue<string>[];
  public attributeNameList: LabelValue<string>[];
  public statusList: LabelValue<string>[];

  public isLoading: boolean;

  // Attributes
  public attributesMap: Map<number, string>;
  public attributeNameVal: string | undefined;
  public attributeValue: string | undefined;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    private readonly confirmationService: ConfirmationService,
    tabService: TabService,
    private readonly dateService: DateService,
    private readonly exportService: ExportService,
    public sessionService: SessionService,
    private readonly componentCockpitOperationSearchService: ComponentCockpitOperationSearchService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
  }

  public getComponentName(): string {
    return ComponentConstants.MAI_COMPONENT_COCKPIT_OPERATION_SEARCH;
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.displayComponentContext('global.search', true);
    this.init();
  }

  /*************************************************************************
   * INIT
   *************************************************************************/
  private init() {
    this.initDropdowns();
    this.selectedRows = [];
    this.dateFilterList = [];

    this.searchObj = {
      bsdeProjectDTOCriteria: {
        fromSap: false
      }
    };

    this.initTableCols();
  }

  /*************************************************************************
   * INIT TABLE COLS
   *************************************************************************/
  private initTableCols() {
    this.tableCols = [
      { field: 'projectNumber', alignment: 'left', width: '10%' },
      { field: 'projectName', alignment: 'left', width: '20%' },
      { field: 'pn', alignment: 'left', width: '10%' },
      { field: 'sn', alignment: 'left', width: '10%' },
      { field: 'startDateStr', alignment: 'left', width: '10%' },
      { field: 'endDateStr', alignment: 'left', width: '10%' },
      { field: 'customer', alignment: 'left', width: '20%' },
      { field: 'currentStatus', alignment: 'left', width: '10%' },
      { field: 'mroCenter', alignment: 'left' },
      { field: 'lastUpdate', alignment: 'left' },
      { field: 'lastUpdatedBy', alignment: 'left' }
    ];
  }

  /*************************************************************************
   * INIT DROPDOWN
   *************************************************************************/
  private initDropdowns() {
    this.componentCockpitOperationSearchService.findMroBireSite().subscribe((res: LabelValue<string>[]) => {
      this.mroCenterList = res;
    });

    this.componentCockpitOperationSearchService.findAllCustomers().subscribe((res: LabelValue<string>[]) => {
      this.customerList = res;
    });

    this.componentCockpitOperationSearchService.findBsdeAttributes().subscribe((res: LabelValue<string>[]) => {
      res.sort((a, b) => (!!a.label && !!b.label && a.label.toLowerCase() > b.label.toLowerCase() ? 1 : -1));
      this.attributeNameList = res;
    });

    this.componentCockpitOperationSearchService.fillStatusList().subscribe((res: LabelValue<string>[]) => {
      this.statusList = res;
    });

    this.componentCockpitOperationSearchService.getAllUserList().subscribe((res: LabelValue<string>[]) => {
      // Conversion of the received LabelValues, in order to hide user's identity
      // (label = 'John Doe', value = 'jdoe')  => (label = 'jdoe', value = 'jdoe')
      res.forEach((elmt) => (elmt.label = elmt.value));

      res.sort((a, b) => (!!a.label && !!b.label && a.label.toLowerCase() > b.label.toLowerCase() ? 1 : -1));
      this.lastUpdateByList = res;
    });

    this.componentCockpitOperationSearchService.initDate().subscribe((res) => {
      this.dateFilterList = res;

      this.searchObj.startDateCriteria = SearchCriteriaConstants.DATE_AFTER_KEY;
      this.searchObj.endDateCriteria = SearchCriteriaConstants.DATE_AFTER_KEY;
      this.searchObj.statusDateCriteria = SearchCriteriaConstants.DATE_AFTER_KEY;
    });
  }

  /*************************************************************************
   * SETTING ATTRIBUTES
   *************************************************************************/
  private setAttributeDTO() {
    this.searchObj.attributes = {};

    this.attributesMap = new Map<number, string>();
    if (!!this.attributeNameVal && !!this.attributeValue) {
      this.attributesMap.set(parseInt(this.attributeNameVal, 10), this.attributeValue);
    }

    const attributesConvMap = {};

    if (this.attributesMap.size !== 0) {
      this.attributesMap.forEach((value: string, key: number) => {
        attributesConvMap[key] = value;
      });
      if (Object.keys(attributesConvMap).length > 0) {
        this.searchObj.attributes = { ...attributesConvMap };
      }
    }
  }

  /*************************************************************************
   * SEARCH
   *************************************************************************/
  public search() {
    this.resultsTable = [];
    this.selectedRows = [];
    this.isLoading = true;
    super.scrollToAnchor(this.resultsContainerAnchor);

    this.setAttributeDTO();

    // If user exists
    const obj: InspectorWorkBenchSearchInput = { ...this.searchObj };
    obj.lastUserCriteria = this.getStatusUserName(obj.lastUserCriteria);

    this.componentCockpitOperationSearchService.findBsdeProjectsByProjectCriteria(obj).subscribe(
      (res: ProjectSearchOutputDTO[]) => {
        res.forEach((row) => {
          this.resultsTable.push({
            projectNumber: row.projectNumber,
            projectName: row.projectName,
            pn: row.pn,
            sn: row.sn,
            startDate: row.startDate,
            startDateStr:
              !!row && !!row.startDate ? this.dateService.dateWithHourMinSecToString(row.startDate) : undefined,
            endDateStr: !!row && !!row.endDate ? this.dateService.dateWithHourMinSecToString(row.endDate) : undefined,
            mroCenter: row.mroCenter,
            customer: row.customer,
            currentStatus: row.currentStatus,
            lastUpdated: this.dateService.dateWithHourToString(row.lastUpdated),
            lastUpdatedBy: row.lastUpdatedBy,
            statusState: row.statusState,
            statusUser: row.statusUser,
            statusDate: row.statusDate,
            bsdeProjectDTO: row.bsdeProjectDTO,
            _expand: false
          });
        });
        this.isLoading = false;
        super.differ(() => {
          super.scrollToAnchor(this.resultsContainerAnchor);
        });
      },
      (error) => {
        this.isLoading = false;
      }
    );
  }

  private getStatusUserName(value): string | undefined {
    return !!value ? this.lastUpdateByList.filter((res) => res.value === value)[0].label : undefined;
  }

  /*************************************************************************
   * EXPORT TABLE
   *************************************************************************/
  public exportTable(): void {
    const table: ProjectSearchOutputUIDTO[] = this.resultsTable.map((row) => {
      return {
        projectNumber: row.projectNumber,
        projectName: row.projectName,
        pn: row.pn,
        sn: row.sn,
        startDateStr: row.startDateStr,
        endDateStr: row.endDateStr,
        customer: row.customer,
        mroCenter: row.mroCenter,
        currentStatus: row.currentStatus,
        lastUpdatedStr: row.lastUpdated,
        lastUpdatedBy: row.lastUpdatedBy
      };
    });

    this.exportService.toExcel(
      table,
      ComponentCockpitOperationSearchComponent.COCKPIT_TABLE_EXPORT_NAME,
      this.componentData.componentId
    );
  }

  public toggleResultTableRowDetailsVisibility(row: ProjectSearchOutputUIDTO): void {
    row._expand = !row._expand;
  }

  /*************************************************************************
   * SAVE SEARCH
   *************************************************************************/
  public loadSearchCriteria(event: ISearchCriteria): void {
    const criteria: InspectorWorkBenchSearchInput | undefined = event.criteria;
    if (!criteria) {
      this.resetSearchCriteria();

      return;
    }
    // do not load criteria first time if we come from stock alert page
    if (!this.componentData.objectId) {
      this.criteriaName = event.name;
      this.searchObj = criteria || {};
    } else {
      this.componentData.objectId = undefined;
    }
    this.search();
  }

  public saveSearchCriteriaAsked(): void {
    const criteriaToSave: InspectorWorkBenchSearchInput = this.searchObj;
    this.criteriaToSave = criteriaToSave;
  }

  public resetSearchCriteria(): void {
    this.criteriaName = undefined;
    this.searchObj = {
      bsdeProjectDTOCriteria: {
        fromSap: false
      },
      startDateCriteria: SearchCriteriaConstants.DATE_AFTER_KEY,
      endDateCriteria: SearchCriteriaConstants.DATE_AFTER_KEY,
      statusDateCriteria: SearchCriteriaConstants.DATE_AFTER_KEY
    };
    this.searchObj.attributes = {};
    this.attributeNameVal = undefined;
    this.attributeValue = undefined;
  }

  public deleteSelectedCockpits(): void {
    const confirmMessageKey =
      this.selectedRows.length > 1 ? 'confirmDeleteSelectedCockpits' : 'confirmDeleteSelectedCockpit';
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(confirmMessageKey),
      accept: () => {
        const bsdeProjectDTOIds: BsdeProjectDTOId[] = [];
        this.selectedRows.forEach((cockpit) => {
          const projectId: BsdeProjectDTOId = {
            projectId: (cockpit.bsdeProjectDTO as BsdeProjectDTO).projectId as string
          };
          bsdeProjectDTOIds.push(projectId);
        });
        this.componentCockpitOperationSearchService.removeComponentCockpit(bsdeProjectDTOIds).subscribe(
          () => {
            this.selectedRows = [];
            this.search();
            this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteCockpit'));
          },
          () => {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnDeleteCockpit'));
          }
        );
      }
    });
  }

  /*************************************************************************
   * Open Component Cockpit Operation Form Create/Edit
   *************************************************************************/

  public openNewComponentCockpit() {
    this.openComponent(undefined, ComponentOpenMode.Create);
  }

  public openComponentCockpit() {
    if (!!this.selectedRows) {
      this.selectedRows.forEach((row) => {
        this.openComponent(row.bsdeProjectDTO, ComponentOpenMode.Read);
      });
    }
  }

  public openComponent(bsdeProjectDTO: BsdeProjectDTO | undefined, openMode?: ComponentOpenMode) {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.MAI_COMPONENT_COCKPIT_OPERATION_FORM,
      openMode: openMode === ComponentOpenMode.Create ? openMode : ComponentOpenMode.Read
    };

    if (!!bsdeProjectDTO) {
      // const projectNumber: number = bsdeProjectDTO.projectNumber as number;exportTable
      data.objectId = this.serializationService.serialize(bsdeProjectDTO.projectNumber);
    }
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  /*************************************************************************
   * OPEN INSPECTION UC
   *************************************************************************/
  public openInspectionUC() {
    this.openComponentCockpitInspection(this.selectedRows, ComponentOpenMode.Create);
  }

  private openComponentCockpitInspection(objectId: ProjectSearchOutputUIDTO[], openMode: ComponentOpenMode): void {
    objectId.forEach((row) => {
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.MAI_COCKPIT_INSPECTION_FORM,
        openMode
      };

      if (!!objectId && !!row.bsdeProjectDTO) {
        const projectNumber: number = row.bsdeProjectDTO.projectNumber as number;
        data.objectId = this.serializationService.serialize(projectNumber);
      }
      const labelKey = 'transaction.' + data.componentId;

      this.tabService.open(this.tabService.create(data, labelKey, true));
    });
  }

  /*************************************************************************
   * OPEN WORKSCOPE UC
   *************************************************************************/
  public openWorkscopeUC() {
    this.openComponentCockpitWorkscope(this.selectedRows, ComponentOpenMode.Read);
  }

  private openComponentCockpitWorkscope(objectId: ProjectSearchOutputUIDTO[], openMode: ComponentOpenMode): void {
    objectId.forEach((row) => {
      const data: PageComponentData = {
        id: this.tabService.generateId(),
        componentId: ComponentConstants.MAI_COCKPIT_WORKSCOPE_FORM,
        openMode
      };

      if (!!objectId && !!row.bsdeProjectDTO) {
        const projectNumber: number = row.bsdeProjectDTO.projectNumber as number;
        data.objectId = this.serializationService.serialize(projectNumber);
      }
      const labelKey = `transaction.${data.componentId}`;

      this.tabService.open(this.tabService.create(data, labelKey, true));
    });
  }

  public openComponentCockpitUC(rowData: ProjectSearchOutputUIDTO) {
    // TODO until screen is developed
  }
}
