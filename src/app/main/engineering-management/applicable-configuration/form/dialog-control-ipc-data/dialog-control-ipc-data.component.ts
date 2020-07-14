import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { cloneDeep as _cloneDeep } from 'lodash-es';
import { SelectItem } from 'primeng/api';

import { ColumnAlignment, TableDataSource } from '../../../../../shared/components/table/table-data-source';
import { ReportConstants } from '../../../../../shared/constants/report-constants';
import { ComponentOpenMode } from '../../../../../shared/enums/component-open-mode.enum';
import { CheckIpcDataInput } from '../../../../../shared/types/api-input-types/product-structure-business/check-ipc-data-input.interface';
import { BireVariantDTO } from '../../../../../shared/types/api-types/bire-variant-dto.interface';
import { ReportDTO } from '../../../../../shared/types/api-types/report-dto.interface';
import { ReportMessageDTO } from '../../../../../shared/types/api-types/report-message-dto.interface';
import { DialogComponent } from '../../../../../shared/types/dialog-component';
import { ListUtils } from '../../../../../shared/utils/list-utils';
import { ObjectUtils } from '../../../../../shared/utils/object-utils';
import { StringUtils } from '../../../../../shared/utils/string-utils';
import { ApplicableConfigurationFormService } from '../applicable-configuration-form.service';

interface MessageRow {
  description: string;
  severity: number;
}

@Component({
  selector: 'aw-dialog-applicable-configuration-control-ipc-data',
  styleUrls: ['./dialog-control-ipc-data.component.scss'],
  templateUrl: './dialog-control-ipc-data.component.html'
})
export class DialogControlIpcDataComponent extends DialogComponent implements OnInit {
  public readonly reportConstants: typeof ReportConstants;

  @Input()
  public applicableConfiguration: BireVariantDTO;

  public messageTableDataSource: TableDataSource<MessageRow>;
  public report: ReportDTO | undefined;
  public searchControlList: SelectItem[];
  public searchControlSelectedList: number[];
  public withEvolutions: boolean;
  public withItems: boolean;

  private messageTable: MessageRow[];

  public constructor(
    private readonly applicableConfigurationFormService: ApplicableConfigurationFormService,
    private readonly translateService: TranslateService
  ) {
    super(ComponentOpenMode.Write, 'DialogControlIpcDataComponent');

    this.reportConstants = ReportConstants;

    this.init();
    this.initMessageTableDataSource();
    this.setSearchControlList();
  }

  public ngOnInit(): void {
    this.controlIpcData();

    this.setDefaultSearchControlList();
  }

  public controlIpcData(): void {
    this.messageTable = [];
    this.report = undefined;

    const input: CheckIpcDataInput = {
      familyCode: StringUtils.orEmpty(this.applicableConfiguration.familyCode),
      structureType: StringUtils.orEmpty(this.applicableConfiguration.structureType),
      variantCode: StringUtils.orEmpty(this.applicableConfiguration.variantCode),
      withEvolutions: this.withEvolutions,
      withItems: this.withItems
    };
    this.applicableConfigurationFormService.checkIpcData(input).subscribe((result) => {
      this.report = result;
      this.messageTable = this.report
        ? ListUtils.orEmpty(this.report.messages).map((elt) => this.createMessageRow(elt))
        : [];
      this.messageTableDataSource.setData(_cloneDeep(this.messageTable));
      this.messageTableDataSource.update();
    });
  }

  public onChangeSearchControlList(): void {
    this.filterMessageTable();
  }

  private initMessageTableDataSource(): void {
    this.messageTableDataSource = new TableDataSource({
      enableSelection: false,
      columns: [
        {
          field: 'description',
          translateKey: this.getTranslateKey('description'),
          width: '90%'
        },
        {
          field: 'severity',
          translateKey: this.getTranslateKey('severity'),
          alignment: ColumnAlignment.CENTER,
          width: '10%'
        }
      ],
      data: []
    });
  }

  private createMessageRow(reportMessage: ReportMessageDTO): MessageRow {
    const messageRow: MessageRow = {
      description: StringUtils.orEmpty(reportMessage.message),
      severity: ObjectUtils.isDefined(reportMessage.severity)
        ? (reportMessage.severity as number)
        : ReportConstants.SEVERITY_INFORMATION
    };

    return messageRow;
  }

  private filterMessageTable(): void {
    this.messageTableDataSource.setData(
      _cloneDeep(this.messageTable).filter((row) => this.searchControlSelectedList.includes(row.severity))
    );
    this.messageTableDataSource.update();
  }

  private init(): void {
    this.messageTable = [];
    this.report = undefined;
    this.withEvolutions = true;
    this.withItems = true;
  }

  private setDefaultSearchControlList(): void {
    this.searchControlSelectedList = [
      ReportConstants.SEVERITY_SUCCESS,
      ReportConstants.SEVERITY_WARNING,
      ReportConstants.SEVERITY_ERROR,
      ReportConstants.SEVERITY_INFORMATION
    ];
  }

  private setSearchControlList(): void {
    const reportErrorKey = this.getTranslateKey('reportError');
    const reportInformationKey = this.getTranslateKey('reportInformation');
    const reportSuccessKey = this.getTranslateKey('reportSuccess');
    const reportWarningKey = this.getTranslateKey('reportWarning');

    this.translateService
      .get([reportErrorKey, reportInformationKey, reportSuccessKey, reportWarningKey])
      .subscribe(([reportErrorLabel, reportInformationLabel, reportSuccessLabel, reportWarningLabel]) => {
        this.searchControlList = [
          {
            label: reportSuccessLabel || 'OK',
            value: ReportConstants.SEVERITY_SUCCESS
          },
          {
            label: reportWarningLabel || 'WARNING',
            value: ReportConstants.SEVERITY_WARNING
          },
          {
            label: reportErrorLabel || 'NOK',
            value: ReportConstants.SEVERITY_ERROR
          },
          {
            label: reportInformationLabel || 'INFORMATION',
            value: ReportConstants.SEVERITY_INFORMATION
          }
        ];
      });
  }
}
