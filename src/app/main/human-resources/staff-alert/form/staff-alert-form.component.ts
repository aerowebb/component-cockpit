import { Component, OnInit } from '@angular/core';

import { TranslateService } from '../../../../../../node_modules/@ngx-translate/core';
import { MenuItem, SelectItem } from '../../../../../../node_modules/primeng/api';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { DateService } from '../../../../shared/services/date.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { SessionService } from '../../../../shared/services/session.service';
import { TabService } from '../../../../shared/services/tab.service';
import { FindStaffAlertInput } from '../../../../shared/types/api-input-types/bidt-employee/find-staff-alert-input.interface';
import { StaffAlertOutputDTO } from '../../../../shared/types/api-output-types/bidt-employee/staff-alert-output-dto.interface';
import { FormPageComponent } from '../../../../shared/types/form-page-component';
import { LabelValue } from '../../../../shared/types/label-value.interface';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../../shared/types/table-column.interface';

import { StaffAlertFormService } from './staff-alert-form.service';

interface AlertListRowDTO {
  employeeNumber?: string;
  employeeLastName?: string;
  employeeFirstName?: string;
  superior?: string;
  type?: string;
  title?: string;
  cellDesign?: string;
  expiryDate?: string;
  _obj?: StaffAlertOutputDTO;
}

enum FilterAlert {
  Medical = 'MSG_TXT_MEDICAL',
  Qualification = 'MSG_TXT_QUALIFICATION',
  License = 'MSG_TXT_LICENSE',
  Reset = 'Reset'
}

@Component({
  selector: 'aw-staff-alert-form',
  templateUrl: './staff-alert-form.component.html',
  styleUrls: ['./staff-alert-form.component.scss']
})
export class StaffAlertFormComponent extends FormPageComponent<PageComponentData> implements OnInit {
  public readonly filterAlert: typeof FilterAlert;
  public searchObject: FindStaffAlertInput;
  public dateText: string;
  public warehouses: LabelValue<string>[];
  public warehouse: string;
  public filterAlertList: SelectItem[];
  public selectedFilterAlert: FilterAlert;
  public openDocumentList: MenuItem[];
  public alertsListTable: AlertListRowDTO[];
  public alertsListTableForDisplay: AlertListRowDTO[];
  public alertsListTableCols: TableColumn[];
  public selectedAlerts: AlertListRowDTO[];
  public highThresholdTooltipText: string;
  public lowThresholdTooltipText: string;
  public isLoading: boolean | false;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    public sessionService: SessionService,
    private readonly staffAlertFormService: StaffAlertFormService,
    private readonly dateService: DateService,
    private readonly translateService: TranslateService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);
    this.filterAlert = FilterAlert;

    this.init();
    this.setFilterAssetList();
  }

  public ngOnInit() {
    super.ngOnInit();

    this.searchObject =
      this.componentData.objectId && this.serializationService.deserialize(this.componentData.objectId);
    this.dateText = this.dateService.dateToString(this.searchObject.alertDate);
    this.calculate();
  }

  private init(): void {
    this.warehouses = [];
    this.warehouse = '';
    this.alertsListTable = [];
    this.alertsListTableForDisplay = [];
    this.selectedAlerts = [];
    this.highThresholdTooltipText = '';
    this.lowThresholdTooltipText = '';
    this.selectedFilterAlert = FilterAlert.Reset;

    this.setTableCols();
  }

  private setFilterAssetList(): void {
    const medicalAlerts = `${this.getComponentName()}.medicalAlerts`;
    const qualificationAlerts = `${this.getComponentName()}.qualificationAlerts`;
    const licenseAlerts = `${this.getComponentName()}.licenseAlerts`;
    const resetKey = `${this.getComponentName()}.reset`;
    this.translateService.get([medicalAlerts, qualificationAlerts, licenseAlerts, resetKey]).subscribe((results) => {
      const medicalAlertsLabel = !!results ? results[medicalAlerts] : 'Medical Alerts';
      const qualificationAlertsLabel = !!results ? results[qualificationAlerts] : 'Qualification Alerts';
      const licenseAlertsLabel = !!results ? results[licenseAlerts] : 'License Alerts';
      const resetLabel = !!results ? results[resetKey] : '';
      this.filterAlertList = [
        { label: resetLabel, value: FilterAlert.Reset },
        { label: medicalAlertsLabel, value: FilterAlert.Medical },
        { label: qualificationAlertsLabel, value: FilterAlert.Qualification },
        { label: licenseAlertsLabel, value: FilterAlert.License }
      ];
    });
  }

  public getComponentName(): string {
    return ComponentConstants.HR_STAFF_ALERT_FORM;
  }

  private setTableCols(): void {
    this.alertsListTableCols = [
      { field: 'employeeLastName', alignment: 'left', width: '10%' },
      { field: 'employeeFirstName', alignment: 'left', width: '10%' },
      { field: 'employeeNumber', alignment: 'left', width: '7%' },
      { field: 'superior', alignment: 'left', width: '15%' },
      { field: 'type', alignment: 'left', width: '10%' },
      { field: 'title', alignment: 'left', width: '35%' },
      { field: 'expiryDate', alignment: 'left', width: '13%' }
    ];
  }

  // tslint:disable-next-line:no-any
  public onChangeFilterAlert(event: any): void {
    switch (event.value) {
      case 'Reset':
        this.alertsListTableForDisplay = JSON.parse(JSON.stringify(this.alertsListTable));
        break;
      case 'MSG_TXT_MEDICAL':
        this.alertsListTableForDisplay = JSON.parse(JSON.stringify(this.alertsListTable)).filter(
          (alert) => alert._obj && alert._obj.type === 'MSG_TXT_MEDICAL'
        );
        break;
      case 'MSG_TXT_QUALIFICATION':
        this.alertsListTableForDisplay = JSON.parse(JSON.stringify(this.alertsListTable)).filter(
          (alert) => alert._obj && alert._obj.type === 'MSG_TXT_QUALIFICATION'
        );
        break;
      case 'MSG_TXT_LICENSE':
        this.alertsListTableForDisplay = JSON.parse(JSON.stringify(this.alertsListTable)).filter(
          (alert) => alert._obj && alert._obj.type === 'MSG_TXT_LICENSE'
        );
        break;
      default:
        this.alertsListTableForDisplay = JSON.parse(JSON.stringify(this.alertsListTable)).filter(
          (alert) => alert._obj && alert._obj.type === event.value
        );
        break;
    }
  }

  private calculate(): void {
    this.isLoading = true;
    this.staffAlertFormService.findStaffAlerts(this.searchObject).subscribe((results) => {
      results.forEach((res) => {
        const alertRow: AlertListRowDTO = {};
        alertRow.expiryDate = this.dateService.dateToString(res.expiry);

        alertRow.employeeFirstName = res.employeeFirstName;
        alertRow.employeeLastName = res.employeeLastName;
        alertRow.employeeNumber = res.employeeNumber;
        alertRow.superior = res.superior;
        alertRow.cellDesign = res.cellDesign;
        alertRow.title = res.title;
        alertRow._obj = res;

        if (!!res.type) {
          const type = `${this.getComponentName()}.${res.type}`;
          this.translateService.get(type).subscribe((result) => {
            if (!!result) {
              alertRow.type = result;
            }
          });
        }

        this.alertsListTable.push(alertRow);
      });
      this.isLoading = false;
      this.alertsListTableForDisplay = JSON.parse(JSON.stringify(this.alertsListTable));
    });
  }

  public openStockOperation(): void {
    // todo
  }

  public newCalculation(): void {
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: ComponentConstants.HR_STAFF_ALERT_SEARCH,
      openMode: ComponentOpenMode.Write
    };
    const labelKey = 'transaction.' + data.componentId;

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }
}
