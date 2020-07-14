import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { PageTocService } from '../../../shared/components/component-sidebar/page-toc.service';
import { PageTocEntry } from '../../../shared/components/component-sidebar/types/page-toc-entry.interface';
import { ColumnAlignment, TableDataSource } from '../../../shared/components/table/table-data-source';
import { ComponentConstants } from '../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { SessionService } from '../../../shared/services/session.service';
import { TabService } from '../../../shared/services/tab.service';
import { WorkShopManagerInputDTO } from '../../../shared/types/api-input-types/manager/workshop-manager-input-dto';
import { HoursByIndicatorsOutputDTO } from '../../../shared/types/api-output-types/manager/hours-by-indicators-output-dto.interface';
import { HumanResourceOutputDTO } from '../../../shared/types/api-output-types/manager/human-resource-output-dto.interface';
import { QualificationEmployeeOutputDTO } from '../../../shared/types/api-output-types/manager/qualification-employee-output-dto.interface';
import { QuantityIndicatorOutputDTO } from '../../../shared/types/api-output-types/manager/quantity-indicato-output-dto.interface';
import { WorkloadOutputDTO } from '../../../shared/types/api-output-types/manager/workload-output-dto-.interface';
import { ProcurementRequestAndIndicatorsOutputDTO } from '../../../shared/types/api-output-types/product-structure-management/procurement-request-and-indicators-output-dto';
import { BidmWorkOrderDTOId } from '../../../shared/types/api-types/bidm-work-order-dto-id.interface';
import { BidtWarehouseDTO } from '../../../shared/types/api-types/bidt-warehouse-dto.interface';
import { PageComponent } from '../../../shared/types/page-component';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';

import { WorkshopHomeService } from './workshop-home.service';

interface WorkloadRow {
  workloadKey?: string;
  validationOk?: number;
  alert?: number;
  validationNok?: number;
  isValidationOk?: boolean;
  isAlert?: boolean;
  isValidationNok?: boolean;
}

interface QualificationsStatusRow {
  qualificationName?: string;
  qualificationDisponibility?: number;
  qualificationOk?: number;
  qualificationAlert?: number;
  qualificationNok?: number;
  isQualificationOk?: boolean;
  isQualificationAlert?: boolean;
  isQualificationNok?: boolean;
}

@Component({
  selector: 'aw-workshop-home',
  styleUrls: ['./workshop-home.component.scss'],
  templateUrl: './workshop-home.component.html'
})
export class WorkshopHomeComponent extends PageComponent<PageComponentData> implements OnInit {
  public toc: PageTocEntry[];

  public bidtWarehouse: BidtWarehouseDTO;

  // Workload table
  public workloadTableDataSource: TableDataSource<WorkloadRow>;

  // Qualifications status table
  public qualificationStatusTableDataSource: TableDataSource<QualificationsStatusRow>;

  // Calendar selected
  public date: Date;

  private workloadOutputDTO: WorkloadOutputDTO;
  public humanResourceOutputDTO: HumanResourceOutputDTO;
  public woDisplayedList: BidmWorkOrderDTOId[];
  public procurementRequestAndIndicatorsParts: ProcurementRequestAndIndicatorsOutputDTO[];
  public procurementRequestAndIndicatorsTools: ProcurementRequestAndIndicatorsOutputDTO[];
  public articleTitleKey: string;
  public supportResourcesTitleKey: string;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    pageTocService: PageTocService,
    public translateService: TranslateService,
    public workshopHomeService: WorkshopHomeService,
    public sessionService: SessionService
  ) {
    super(
      ComponentOpenMode.Read,
      favoriteService,
      loaderService,
      messageService,
      serializationService,
      tabService,
      pageTocService
    );
    this.loadTablesHeader();
  }

  public getComponentName(): string {
    return ComponentConstants.DAS_WORKSHOP_HOME;
  }

  public ngOnInit() {
    super.ngOnInit();
    this.init();
    if (!!this.componentData) {
      // this.setTableOfContent();

      this.updateOpenMode(this.componentData.openMode);
    }
    this.loadTables();
  }

  private init() {
    this.date = new Date();
    this.humanResourceOutputDTO = {
      nbEmployee: 0,
      nbPrevisionalDaysEmployeeArePresent: 0,
      nbPrevisionalDaysEmployeeWorkedOnWO: 0
    };
    this.humanResourceOutputDTO = {};
    this.bidtWarehouse = { whName: ' ' };
    this.articleTitleKey = 'articleTitleKey';
    this.supportResourcesTitleKey = 'supportResourcesTitleKey';
  }

  public loadTablesHeader(): void {
    this.initWorkloadTableDataSource();
    this.initQualificationsStatusTableDataSource();
  }

  private initWorkloadTableDataSource(): void {
    this.workloadTableDataSource = new TableDataSource({
      allowMultiSelect: false,
      enableSelection: false,
      columns: [
        { field: 'workloadKey', translateKey: ' ' },
        {
          field: 'validationOk',
          translateKey: this.getTranslateKey('validationOk'),
          alignment: ColumnAlignment.CENTER
        },
        { field: 'alert', translateKey: this.getTranslateKey('alert'), alignment: ColumnAlignment.CENTER },
        {
          field: 'validationNok',
          translateKey: this.getTranslateKey('validationNok'),
          alignment: ColumnAlignment.CENTER
        }
      ],
      data: [
        {
          workloadKey: this.getTranslateKey('workOrders'),
          validationOk: 0,
          alert: 0,
          validationNok: 0
        },
        {
          workloadKey: this.getTranslateKey('workOrdersHours'),
          validationOk: 0,
          alert: 0,
          validationNok: 0
        },
        {
          workloadKey: this.getTranslateKey('articles'),
          validationOk: 0,
          alert: 0,
          validationNok: 0
        },
        {
          workloadKey: this.getTranslateKey('supportResources'),
          validationOk: 0,
          alert: 0,
          validationNok: 0
        }
      ]
    });
  }

  private initQualificationsStatusTableDataSource(): void {
    this.qualificationStatusTableDataSource = new TableDataSource({
      allowMultiSelect: false,
      enableSelection: false,
      columns: [
        { field: 'qualificationName', translateKey: ' ' },
        {
          field: 'qualificationDisponibility',
          translateKey: this.getTranslateKey('qualificationDisponibility'),
          alignment: ColumnAlignment.CENTER
        },
        {
          field: 'qualificationOk',
          translateKey: this.getTranslateKey('qualificationOk'),
          alignment: ColumnAlignment.CENTER
        },
        {
          field: 'qualificationAlert',
          translateKey: this.getTranslateKey('qualificationAlert'),
          alignment: ColumnAlignment.CENTER
        },
        {
          field: 'qualificationNok',
          translateKey: this.getTranslateKey('qualificationNok'),
          alignment: ColumnAlignment.CENTER
        }
      ],
      data: []
    });
  }

  public onCalendarOptions(): void {
    this.loadTables();
  }

  public onDateValueChange(): void {
    this.loadTables();
  }

  public loadTables(): void {
    const workShopManagerInputDTO: WorkShopManagerInputDTO = {
      startDate: this.date
    };
    this.workshopHomeService.getWorkShopManagerInfo(workShopManagerInputDTO).subscribe(
      (result) => {
        if (!!result) {
          this.workloadOutputDTO = result;
          this.humanResourceOutputDTO = this.workloadOutputDTO.humanResourceOutputDTO;
          this.bidtWarehouse = !!this.workloadOutputDTO.bidtWarehouse
            ? this.workloadOutputDTO.bidtWarehouse
            : { whName: ' ' };
          const worksOrdersHoursOutputDTO: HoursByIndicatorsOutputDTO = this.workloadOutputDTO
            .worksOrdersHoursOutputDTO;
          const worksOrdersPartsAvailabilityOutputDTO: QuantityIndicatorOutputDTO = this.workloadOutputDTO
            .worksOrdersPartsAvailabilityOutputDTO;
          const worksOrdersToolsAvailabilityOutputDTO: QuantityIndicatorOutputDTO = this.workloadOutputDTO
            .worksOrdersToolsAvailabilityOutputDTO;

          this.procurementRequestAndIndicatorsParts = this.workloadOutputDTO.procurementRequestAndIndicatorsPartsList;

          this.procurementRequestAndIndicatorsTools = this.workloadOutputDTO.procurementRequestAndIndicatorsToolsList;

          this.woDisplayedList = this.workloadOutputDTO.woDisplayedList;

          if (
            !!worksOrdersHoursOutputDTO &&
            !!worksOrdersPartsAvailabilityOutputDTO &&
            !!worksOrdersToolsAvailabilityOutputDTO
          ) {
            this.workloadTableDataSource.setData([
              {
                workloadKey: this.getTranslateKey('workOrders'),
                validationOk: worksOrdersHoursOutputDTO.ok,
                alert: worksOrdersHoursOutputDTO.warning,
                validationNok: worksOrdersHoursOutputDTO.notOk,
                isValidationOk: worksOrdersHoursOutputDTO.ok > 0,
                isAlert: worksOrdersHoursOutputDTO.warning > 0,
                isValidationNok: worksOrdersHoursOutputDTO.notOk > 0
              },
              {
                workloadKey: this.getTranslateKey('workOrdersHours'),
                validationOk: worksOrdersHoursOutputDTO.hoursOk,
                alert: worksOrdersHoursOutputDTO.hoursWarning,
                validationNok: worksOrdersHoursOutputDTO.hoursNOk,
                isValidationOk: worksOrdersHoursOutputDTO.hoursOk > 0,
                isAlert: worksOrdersHoursOutputDTO.hoursWarning > 0,
                isValidationNok: worksOrdersHoursOutputDTO.hoursNOk > 0
              },
              {
                workloadKey: this.getTranslateKey('articles'),
                validationOk: worksOrdersPartsAvailabilityOutputDTO.ok,
                alert: worksOrdersPartsAvailabilityOutputDTO.warning,
                validationNok: worksOrdersPartsAvailabilityOutputDTO.notOk,
                isValidationOk: worksOrdersPartsAvailabilityOutputDTO.ok > 0,
                isAlert: worksOrdersPartsAvailabilityOutputDTO.warning > 0,
                isValidationNok: worksOrdersPartsAvailabilityOutputDTO.notOk > 0
              },
              {
                workloadKey: this.getTranslateKey('supportResources'),
                validationOk: worksOrdersToolsAvailabilityOutputDTO.ok,
                alert: worksOrdersToolsAvailabilityOutputDTO.warning,
                validationNok: worksOrdersToolsAvailabilityOutputDTO.notOk,
                isValidationOk: worksOrdersToolsAvailabilityOutputDTO.ok > 0,
                isAlert: worksOrdersToolsAvailabilityOutputDTO.warning > 0,
                isValidationNok: worksOrdersToolsAvailabilityOutputDTO.notOk > 0
              }
            ]);
          }
          const qualificationEmployeeOutputDTO: QualificationEmployeeOutputDTO[] = this.workloadOutputDTO
            .qualificationEmployeeOutputDTO;

          const qualRowData: QualificationsStatusRow[] = qualificationEmployeeOutputDTO.map((elt) => {
            return {
              qualificationName: elt.qualificationTitle,
              qualificationDisponibility: elt.nbHoursAvailability,
              qualificationOk: elt.ok,
              qualificationAlert: elt.warning,
              qualificationNok: elt.notOk,
              isQualificationOk: elt.ok > 0,
              isQualificationAlert: elt.warning > 0,
              isQualificationNok: elt.notOk > 0
            };
          });
          this.qualificationStatusTableDataSource.setData(qualRowData);
        }
      },
      (_error) => {
        this.messageService.showErrorMessage(_error.message);
      }
    );
  }
}
