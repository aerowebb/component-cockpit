import { Component, OnInit } from '@angular/core';

import { ColumnAlignment, TableDataSource } from '../../../../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../../../shared/services/confirmation.service';
import { DateService } from '../../../../../../shared/services/date.service';
import { MessageService } from '../../../../../../shared/services/message.service';
import { SaveCatalogInput } from '../../../../../../shared/types/api-input-types/catalog/save-catalog-input.interface';
import { BidtCompHolidayCompanyDTO } from '../../../../../../shared/types/api-types/bidt-comp-holiday-company-dto.interface';
import { DeletePublicHolidayDTO } from '../../../../../../shared/types/api-types/bidt-company-delete-holiday-dto.interface';
import { BidtCompanyHolidayDTO } from '../../../../../../shared/types/api-types/bidt-company-holiday-dto.interface';
import { CompanyHolidaySaveDTO } from '../../../../../../shared/types/api-types/bidt-company-holiday-save-dto.interface';
import { PublicHolidayTableDTO } from '../../../../../../shared/types/api-types/bidt-holiday-table-dto.interface';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
import { CatalogService } from '../../../catalog.service';
import { DynamicCatalog } from '../../../types/dynamic-catalog.interface';

import { PublicHolidayService } from './public-holiday.service';

@Component({
  selector: 'aw-public-holiday',
  templateUrl: './public-holiday.component.html'
})
export class PublicHolidayComponent extends DynamicCatalog implements OnInit {
  public publicHolidayTableDataSource: TableDataSource<BidtCompanyHolidayDTO>;
  public resultTableDTO: PublicHolidayTableDTO[];

  public searchObject: BidtCompanyHolidayDTO;

  public selectedHolidayDialogData: BidtCompanyHolidayDTO;
  public deleteHolidayInput: DeletePublicHolidayDTO[];
  public companies: LabelValue<string>[];
  public holidayDialogOpenMode: ComponentOpenMode;
  public showHolidayDialog: boolean;
  public currentPublicHoliday: BidtCompanyHolidayDTO | undefined;
  public currentPublicHolidayIndex: number | undefined;
  public isNewPublicHoliday: boolean;
  public selectedCompany?: number;
  public bidtCompanyHolidayAddOrUpdateList: CompanyHolidaySaveDTO[];
  public deletedHolidays: BidtCompanyHolidayDTO[];

  public constructor(
    private readonly publicholidayService: PublicHolidayService,
    private readonly messageService: MessageService,
    private readonly confirmationService: ConfirmationService,
    private readonly dateService: DateService,
    catalogService: CatalogService
  ) {
    super(catalogService, ComponentOpenMode.Read);
    this.companies = [];
    this.resultTableDTO = [];
    this.deletedHolidays = [];
    this.holidayDialogOpenMode = ComponentOpenMode.Read;
    this.publicHolidayTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'startDateString',
          translateKey: this.getTranslateKey('startDateString')
        },
        {
          field: 'endDateString',
          translateKey: this.getTranslateKey('endDateString')
        },
        {
          field: 'compHolidayComment',
          translateKey: this.getTranslateKey('compHolidayComment')
        },
        {
          field: 'statusBool',
          translateKey: this.getTranslateKey('statusBool'),
          alignment: ColumnAlignment.CENTER
        }
      ],
      data: []
    });

    this.searchObject = {};
    this.showHolidayDialog = false;
    this.currentPublicHoliday = undefined;
    this.currentPublicHolidayIndex = undefined;
    this.isNewPublicHoliday = false;
    this.selectedCompany = undefined;
    this.bidtCompanyHolidayAddOrUpdateList = [];
  }

  public ngOnInit() {
    this.loadCompany();
  }

  public getComponentName(): string {
    return 'PublicHolidayComponent';
  }
  public loadCompany(): void {
    this.publicholidayService.findBidtCompanyByCriteria({}).subscribe((results) => {
      this.selectedCompany = parseInt(results[0].value, 10);
      this.loadPublicHolidayTableData();
      this.companies = results;
    });
  }

  /**
   * Load Holiday table
   */
  public loadPublicHolidayTableData() {
    this.publicHolidayTableDataSource.setData([]);
    if (this.selectedCompany != undefined) {
      this.publicholidayService.findByCriteriaHolidayList(this.selectedCompany).subscribe((results) => {
        results.forEach((result) => {
          if (!!result.bidtCompanyHolidayDTO) {
            if (
              !!result.bidtCompanyHolidayDTO &&
              result.bidtCompanyHolidayDTO.compHolidayStartDate !== null &&
              result.bidtCompanyHolidayDTO.compHolidayStartDate !== undefined &&
              result.bidtCompanyHolidayDTO.compHolidayEndDate !== null &&
              result.bidtCompanyHolidayDTO.compHolidayEndDate !== undefined
            ) {
              result.bidtCompanyHolidayDTO.statusBool =
                result.bidtCompanyHolidayDTO.compHolidayActivated === 1 ? true : false;
              result.bidtCompanyHolidayDTO.startDateString = this.dateService.timestampToString(
                result.bidtCompanyHolidayDTO.compHolidayStartDate
              );
              result.bidtCompanyHolidayDTO.endDateString = this.dateService.timestampToString(
                result.bidtCompanyHolidayDTO.compHolidayEndDate
              );
            }
          } else {
            super.throwUnboundLocalError('loadPublicHolidayTableData', 'result.bidtCompanyHolidayDTO');
          }
        });
        this.resultTableDTO = results;
        results.forEach((element) => {
          if (!!element.bidtCompanyHolidayDTO) {
            this.publicHolidayTableDataSource.addData([element.bidtCompanyHolidayDTO]);
          } else {
            super.throwUnboundLocalError('loadPublicHolidayData', 'element.bidtCompanyHolidayDTO');
          }
        });
      });
    } else {
      this.messageService.showErrorMessage(this.getTranslateKey('errorOnLoadingData'));
    }
  }

  public addHoliday(): void {
    this.showHolidayDialog = true;
    this.isNewPublicHoliday = true;
    this.currentPublicHoliday = {};
  }

  public editHoliday(): void {
    this.showHolidayDialog = true;
    this.isNewPublicHoliday = false;
    const publicHoiday = { ...this.publicHolidayTableDataSource.dataSelection[0] };
    this.currentPublicHoliday = publicHoiday;
    this.currentPublicHolidayIndex = this.publicHolidayTableDataSource.dataSrc.findIndex(
      (type) => type === this.publicHolidayTableDataSource.dataSelection[0]
    );
  }

  public deleteHoliday(): void {
    const partialMessageKey =
      this.publicHolidayTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedRows'
        : 'confirmDeleteSelectedRow';
    const deleteHolidayInput: BidtCompHolidayCompanyDTO[] = [];
    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.publicHolidayTableDataSource.dataSelection.forEach((x) => this.deletedHolidays.push(x));
        this.publicHolidayTableDataSource.deleteDataSelection();
        this.publicHolidayTableDataSource.dataSelection = [];

        if (this.deletedHolidays.length > 0) {
          this.deletedHolidays.forEach((type) => {
            const compHolidayId = this.resultTableDTO.filter(
              (object) =>
                !!object.bidtCompanyHolidayDTO &&
                object.bidtCompanyHolidayDTO.companyHolidayId === type.companyHolidayId
            )[0].bidtCompHolidayCompId;
            if (compHolidayId !== null && compHolidayId !== undefined) {
              const typeId: BidtCompHolidayCompanyDTO = {
                bidtCompanyId: this.selectedCompany,
                bidtCompanyHolidayId: type.companyHolidayId,
                bidtCompHolidayCompId: compHolidayId
              };
              deleteHolidayInput.push(typeId);
            }
          });
          this.publicholidayService.deleteHoliday(deleteHolidayInput).subscribe(
            (_result) => {
              this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeletePublicHoliday'));
              if (this.publicHolidayTableDataSource.hasDataSelection) {
                this.publicHolidayTableDataSource.dataSelection = [];
              }
            },
            (_error) => {
              this.messageService.showErrorMessage(this.getTranslateKey('errorOnDeletePublicHoliday'));
            }
          );
          this.publicHolidayTableDataSource.dataSelection = [];
        }
      }
    });
  }

  public createPublicHoliday(event: BidtCompanyHolidayDTO): void {
    if (
      !!event &&
      event.compHolidayStartDate !== null &&
      event.compHolidayStartDate !== undefined &&
      event.compHolidayEndDate !== null &&
      event.compHolidayEndDate !== undefined
    ) {
      // event.companyId = this.searchObject.companyId;
      event.compHolidayActivated ? (event.compHolidayActivated = 1) : (event.compHolidayActivated = 0);
      event.compHolidayActivated ? (event.statusBool = true) : (event.statusBool = false);
      event.startDateString = event.compHolidayStartDate.toString();
      event.endDateString = event.compHolidayEndDate.toString();
      event.dataId = Math.random();
      const publicHoliday = { ...event };
      this.publicHolidayTableDataSource.addData([publicHoliday]);
    }
  }

  public updatePublicHoliday(event: BidtCompanyHolidayDTO): void {
    if (
      event.compHolidayStartDate !== null &&
      event.compHolidayStartDate !== undefined &&
      event.compHolidayEndDate !== null &&
      event.compHolidayEndDate !== undefined &&
      this.currentPublicHolidayIndex !== null &&
      this.currentPublicHolidayIndex !== undefined
    ) {
      event.compHolidayActivated ? (event.compHolidayActivated = 1) : (event.compHolidayActivated = 0);
      event.compHolidayActivated ? (event.statusBool = true) : (event.statusBool = false);
      event.startDateString = event.compHolidayStartDate.toString();
      event.endDateString = event.compHolidayEndDate.toString();
      event.dataId = Math.random();
      const publicHoliday = { ...event };
      this.publicHolidayTableDataSource.replaceData(
        this.publicHolidayTableDataSource.dataSrc[this.currentPublicHolidayIndex],
        publicHoliday
      );
      this.publicHolidayTableDataSource.dataSelection = [];
    }
  }

  /**
   * Saving  Data
   */
  public save(): void {
    this.bidtCompanyHolidayAddOrUpdateList = [];
    this.publicHolidayTableDataSource.dataSrc.forEach((holiday) => {
      const saveInput: CompanyHolidaySaveDTO = {
        companyId: this.selectedCompany,
        bidtCompanyHolidayDTO: holiday,
        bidtCompHolidayCompId:
          holiday != undefined
            ? holiday.companyHolidayId !== null && holiday.companyHolidayId !== undefined
              ? this.resultTableDTO.filter(
                  (object) =>
                    !!object.bidtCompanyHolidayDTO &&
                    !!holiday &&
                    object.bidtCompanyHolidayDTO.companyHolidayId === holiday.companyHolidayId
                )[0].bidtCompHolidayCompId
              : undefined
            : undefined
      };
      this.bidtCompanyHolidayAddOrUpdateList.push(saveInput);
    });
    const input: SaveCatalogInput = {
      bidtCompanyHolidayAddOrUpdateList: this.bidtCompanyHolidayAddOrUpdateList
    };

    this.publicholidayService.saveCatalog(input).subscribe(
      () => {
        this.messageService.showSuccessMessage(this.getTranslateKey('successOnSavePublicHoliday'));
        this.refresh();
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnSavePublicHoliday'));
      }
    );
  }

  /**
   * Refresh the table data
   */
  public refresh() {
    this.deletedHolidays = [];
    this.currentPublicHoliday = undefined;
    this.bidtCompanyHolidayAddOrUpdateList = [];
    this.loadPublicHolidayTableData();
  }
}
