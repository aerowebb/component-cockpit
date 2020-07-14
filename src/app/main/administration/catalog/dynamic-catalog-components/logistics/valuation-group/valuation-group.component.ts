import { Component, OnInit } from '@angular/core';

import { TableDataSource } from '../../../../../../shared/components/table/table-data-source';
import { ComponentOpenMode } from '../../../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../../../shared/services/confirmation.service';
import { LoaderService } from '../../../../../../shared/services/loader.service';
import { MessageService } from '../../../../../../shared/services/message.service';
import { SaveCatalogInput } from '../../../../../../shared/types/api-input-types/catalog/save-catalog-input.interface';
import { BidtValuationGroupDTO } from '../../../../../../shared/types/api-types/bidt-valuation-group-dto.interface';
import { LabelValue } from '../../../../../../shared/types/label-value.interface';
import { CatalogService } from '../../../catalog.service';
import { DynamicCatalog } from '../../../types/dynamic-catalog.interface';

import { ValuationGroupService } from './valuation-group.service';

@Component({
  selector: 'aw-valuation-group',
  templateUrl: './valuation-group.component.html'
})
export class ValuationGroupComponent extends DynamicCatalog implements OnInit {
  public filteredRowsNb: number;

  public valuationGroupTableDataSource: TableDataSource<BidtValuationGroupDTO>;

  public currentValuationGroup: BidtValuationGroupDTO | undefined;
  public currentValuationGroupIndex: number | undefined;
  public showValuationGroupForm: boolean;
  public isNewValuationGroup: boolean;
  public valuationGroupAddedList: BidtValuationGroupDTO[];
  public valuationGroupUpdatedList: BidtValuationGroupDTO[];
  public codeName: LabelValue<string>[];

  public constructor(
    private readonly _loaderService: LoaderService,
    private readonly _messageService: MessageService,
    private readonly valuationGroupService: ValuationGroupService,
    private readonly confirmationService: ConfirmationService,
    catalogService: CatalogService
  ) {
    super(catalogService, ComponentOpenMode.Read);

    this.valuationGroupTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'valuationGroupCode',
          translateKey: this.getTranslateKey('valuationGroupCode')
        },
        {
          field: 'valuationGroupName',
          translateKey: this.getTranslateKey('valuationGroupName')
        },
        {
          field: 'rangeValueMinCsv',
          translateKey: this.getTranslateKey('rangeValueMinCsv')
        },
        {
          field: 'rangeValueMaxCsv',
          translateKey: this.getTranslateKey('rangeValueMaxCsv')
        },
        { field: 'unitCode', translateKey: this.getTranslateKey('unitCode') }
      ],
      data: []
    });

    this.currentValuationGroup = undefined;
    this.currentValuationGroupIndex = undefined;
    this.showValuationGroupForm = false;
    this.isNewValuationGroup = false;
    this.valuationGroupAddedList = [];
    this.valuationGroupUpdatedList = [];
    this.loadValuationGroupTableData();
  }

  public ngOnInit() {
    this._loaderService.hideModuleLoadingBar();
  }

  public getComponentName(): string {
    return 'ValuationGroupComponent';
  }

  protected get messageService(): MessageService {
    return this._messageService;
  }

  // tslint:disable-next-line:no-any
  public onFilter(event: any): void {
    this.filteredRowsNb = event.filteredValue.length;
  }

  public loadValuationGroupTableData(): void {
    this.valuationGroupTableDataSource.setData([]);
    this.valuationGroupService.loadValuationGroupTableData().subscribe(
      (results) => {
        results.list.forEach((res) => {
          if (!!res.rangeValueMin) {
            const min = parseFloat(res.rangeValueMin);
            res.rangeValueMinCsv = this.numberWithCommas(min);
          }
          if (!!res.rangeValueMax) {
            const max = parseFloat(res.rangeValueMax);
            res.rangeValueMaxCsv = this.numberWithCommas(max);
          }
        });
        this.valuationGroupTableDataSource.addData(results.list);
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetResults'));
      }
    );
  }

  private numberWithCommas(n: number): string {
    const parts = n.toString().split('.');

    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',') + (parts[1] ? '.' + parts[1] : '');
  }

  public refresh(): void {
    this.valuationGroupAddedList = [];
    this.valuationGroupUpdatedList = [];
    this.loadValuationGroupTableData();
  }

  public save(): void {
    this.valuationGroupService.getValuationGroupCodeNameMap().subscribe((results) => {
      this.codeName = results;
    });
    this.valuationGroupTableDataSource.dataSrc.forEach((element) => {
      this.codeName.forEach((result) => {
        if (result.label === element.valuationGroupCode) {
          element.valuationGroupCode = result.value;
        }
      });
    });
    const input: SaveCatalogInput = {
      bidtValuationGroupAddOrUpdateDTOList: this.valuationGroupTableDataSource.dataSrc
    };
    this.valuationGroupService.saveValuationGroup(input).subscribe(
      () => {
        this.messageService.showSuccessMessage(this.getTranslateKey('successOnSaveValuationGroup'));
        this.refresh();
      },
      () => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnSaveValuationGroup'));
      }
    );
  }

  public addValuationGroup(): void {
    this.showValuationGroupForm = true;
    this.isNewValuationGroup = true;
    this.currentValuationGroup = {};
  }

  public editSelectedValuationGroup(): void {
    this.showValuationGroupForm = true;
    this.isNewValuationGroup = false;
    const valuationGroup = this.valuationGroupTableDataSource.dataSelection[0];
    this.currentValuationGroup = valuationGroup;
    this.currentValuationGroupIndex = this.valuationGroupTableDataSource.dataSrc.findIndex(
      (type) => type === this.valuationGroupTableDataSource.dataSelection[0]
    );
  }

  public deleteSelectedValuationGroup(): void {
    const partialMessageKey =
      this.valuationGroupTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedRows'
        : 'confirmDeleteSelectedRow';

    const valuationGroup: number[] = [];
    this.valuationGroupTableDataSource.dataSelection.forEach((type) => {
      if (!!type && !!type.id) {
        const typeId: number = type.id;
        valuationGroup.push(typeId);
      }
    });

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.valuationGroupService.deleteValuationGroup(valuationGroup).subscribe(
          (result) => {
            this.valuationGroupTableDataSource.dataSelection.forEach((type) => {
              const inAddedList = this.valuationGroupAddedList.filter((element, index) => {
                return (
                  type.valuationGroupCode === element.valuationGroupCode &&
                  type.valuationGroupName === element.valuationGroupName
                );
              });

              // removing from added
              if (inAddedList) {
                let foundAddedIndex = -1;
                this.valuationGroupAddedList.forEach((entry, index) => {
                  if (
                    entry.valuationGroupCode === type.valuationGroupCode &&
                    type.valuationGroupName === entry.valuationGroupName
                  ) {
                    foundAddedIndex = index;
                  }
                });
                this.valuationGroupAddedList.splice(foundAddedIndex, 1);
              }

              const inUpdatedList = this.valuationGroupUpdatedList.filter((element, index) => {
                return (
                  element.valuationGroupCode === type.valuationGroupCode &&
                  type.valuationGroupName === element.valuationGroupName
                );
              });

              // removing from updated
              if (inUpdatedList) {
                let foundUpdatedIndex = -1;
                this.valuationGroupUpdatedList.forEach((entry, index) => {
                  if (
                    entry.valuationGroupCode === type.valuationGroupCode &&
                    type.valuationGroupName === entry.valuationGroupName
                  ) {
                    foundUpdatedIndex = index;
                  }
                });
                this.valuationGroupUpdatedList.splice(foundUpdatedIndex, 1);
              }

              // Removing from table
              this.valuationGroupTableDataSource.deleteDataSelection();
            });
            this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteValuationGroup'));
            this.valuationGroupTableDataSource.dataSelection = [];
          },
          (error) => {
            this.messageService.showErrorMessage(this.getTranslateKey('errorOnDeleteValuationGroup'));
          }
        );
      }
    });
  }

  public createValuationGroup(event: BidtValuationGroupDTO): void {
    if (event) {
      event.rangeValueMinCsv = event.rangeValueMin && this.numberWithCommas(parseFloat(event.rangeValueMin));
      event.rangeValueMaxCsv = event.rangeValueMax && this.numberWithCommas(parseFloat(event.rangeValueMax));
      this.valuationGroupAddedList = [...this.valuationGroupAddedList, event];
      const valuationGroup = { ...event };
      this.valuationGroupTableDataSource.addData([valuationGroup]);
    }
  }

  public updateValuationGroup(event: BidtValuationGroupDTO): void {
    if (this.currentValuationGroupIndex !== undefined) {
      event.rangeValueMinCsv = event.rangeValueMin && this.numberWithCommas(parseFloat(event.rangeValueMin));
      event.rangeValueMaxCsv = event.rangeValueMax && this.numberWithCommas(parseFloat(event.rangeValueMax));
      this.valuationGroupUpdatedList = [...this.valuationGroupUpdatedList, event];
      const valuationGroup = { ...event };
      this.valuationGroupTableDataSource.replaceData(
        this.valuationGroupTableDataSource.dataSrc[this.currentValuationGroupIndex],
        valuationGroup
      );
      this.valuationGroupTableDataSource.dataSelection = [];
    } else {
      super.throwUnboundLocalError('updateValuationGroup', 'this.currentValuationGroupIndex');
    }
  }
}
