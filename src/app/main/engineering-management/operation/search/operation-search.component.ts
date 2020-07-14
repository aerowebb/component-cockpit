import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';

import { TableDataSource } from '../../../../shared/components/table/table-data-source';
import { ComponentConstants } from '../../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../../shared/services/confirmation.service';
import { ExportService } from '../../../../shared/services/export.service';
import { FavoriteService } from '../../../../shared/services/favorite.service';
import { LoaderService } from '../../../../shared/services/loader.service';
import { MessageService } from '../../../../shared/services/message.service';
import { SerializationService } from '../../../../shared/services/serialization.service';
import { TabService } from '../../../../shared/services/tab.service';
import { BireOperationDTOId } from '../../../../shared/types/api-types/bire-operation-dto-id.interface';
import { BireOperationDTO } from '../../../../shared/types/api-types/bire-operation-dto.interface';
import { SearchResultsDTO } from '../../../../shared/types/api-types/search-results-dto.interface';
import { PageComponent } from '../../../../shared/types/page-component';
import { PageComponentData } from '../../../../shared/types/page-component-data.interface';

import { OperationSearchService } from './operation-search.service';

interface ExportOperationSearchDTO {
  opeCode?: string;
  opeVersion?: string;
  opeDesignation?: string;
  rangeCode?: string;
}

@Component({
  selector: 'aw-operation-search',
  templateUrl: './operation-search.component.html'
})
export class OperationSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  public newItem = false;
  public isLoading: boolean;

  public operationTableDataSource: TableDataSource<BireOperationDTO>;
  public searchObject: BireOperationDTO;
  public isReadOnlyForm: boolean;
  public isNewOperationForm: boolean;
  public newOperationForm: BireOperationDTO;
  public operation: BireOperationDTO;
  public tabModeValue: ComponentOpenMode;
  public showAdvancedCriteria: boolean;

  private readonly resultsTableExportName: string;

  public exportList: ExportOperationSearchDTO[];

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly confirmationService: ConfirmationService,
    private readonly exportService: ExportService,
    private readonly operationSearchService: OperationSearchService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.resultsTableExportName = 'operation-list';
    this.isLoading = false;
    this.isReadOnlyForm = false;
    this.isNewOperationForm = false;

    this.newOperationForm = {};

    this.operation = {};

    this.searchObject = {};

    this.initOperationTableDataSource();

    this.showAdvancedCriteria = false;

    this.exportList = [];
  }

  public getComponentName(): string {
    return ComponentConstants.ENG_OPERATION_SEARCH;
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.displayComponentContext('global.search', true);
  }

  private initOperationTableDataSource(): void {
    this.operationTableDataSource = new TableDataSource({
      allowMultiSelect: true,
      columns: [
        {
          field: 'opeCode',
          translateKey: this.getTranslateKey('opeCode')
        },
        {
          field: 'opeVersion',
          translateKey: this.getTranslateKey('opeVersion')
        },
        {
          field: 'rangeCode',
          translateKey: this.getTranslateKey('rangeCode')
        },
        {
          field: 'opeDesignation',
          translateKey: this.getTranslateKey('opeDesignation')
        }
      ],
      data: []
    });
  }

  private openOperation(object: BireOperationDTOId | undefined, openMode: ComponentOpenMode): void {
    const labelKey = 'transaction.OperationSearchComponent';
    const data: PageComponentData = {
      id: this.tabService.generateId(),
      componentId: 'OperationFormComponent',
      objectId: this.serializationService.serialize(object),
      openMode
    };

    this.tabService.open(this.tabService.create(data, labelKey, true));
  }

  public openOperationLink(object: BireOperationDTOId): void {
    this.openOperation(object, ComponentOpenMode.Read);
  }

  public createNewOperation(): void {
    this.openOperation(undefined, ComponentOpenMode.Create);
  }

  public openSelectedOperations(): void {
    this.operationTableDataSource.dataSelection.forEach((selectedOperation) => {
      if (selectedOperation) {
        if (selectedOperation.opeCode && selectedOperation.opeVersion && selectedOperation.rangeCode) {
          const selectedOperationId: BireOperationDTOId = {
            opeCode: selectedOperation.opeCode,
            opeVersion: selectedOperation.opeVersion,
            rangeCode: selectedOperation.rangeCode
          };
          this.openOperation(selectedOperationId, ComponentOpenMode.Read);
        } else {
          this.messageService.showWarningMessage(this.getTranslateKey('errorOnMissingCustomerCode'));
        }
      }
    });
  }

  public deleteSelectedOperations(): void {
    const partialMessageKey =
      this.operationTableDataSource.dataSelectionCount > 1
        ? 'confirmDeleteSelectedOperations'
        : 'confirmDeleteSelectedOperation';

    this.confirmationService.confirmDelete({
      messageKey: this.getTranslateKey(partialMessageKey),
      accept: () => {
        this.operationTableDataSource.dataSelection.forEach((operation) => {
          if (operation && operation.opeCode && operation.opeVersion && operation.rangeCode) {
            const operationId: BireOperationDTOId = {
              opeCode: operation.opeCode,
              rangeCode: operation.rangeCode,
              opeVersion: operation.opeVersion
            };
            this.operationSearchService.removeBireOperation(operationId).subscribe(() => {
              this.messageService.showSuccessMessage(this.getTranslateKey('successOnDeleteOperation'));
              this.search();
            });
          }
        });
      }
    });
  }

  public resetResultsTable(table: Table): void {
    table.reset();
    table.filters = {};
  }

  public saveSearchCriteria(): void {
    this.searchObject = this.newOperationForm;
  }

  public resetSearchCriteria(): void {
    this.searchObject = {};
  }

  public search(): void {
    this.isLoading = true;
    this.operationTableDataSource.setData([]);
    this.operationSearchService.findBireOperationsBySearchCriteria(this.searchObject).subscribe(
      (result) => {
        this.isLoading = false;
        this.setResultsTable(result);
      },
      () => {
        this.isLoading = false;
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnGetResults'));
      }
    );
  }

  private setResultsTable(resultsTable: SearchResultsDTO<BireOperationDTO>): void {
    if (resultsTable) {
      this.operationTableDataSource.setData(resultsTable.list);
      this.operationTableDataSource.dataSrc.forEach((result) => {
        const exportElement: ExportOperationSearchDTO = {
          opeCode: result.opeCode,
          opeVersion: result.opeVersion,
          rangeCode: result.rangeCode,
          opeDesignation: result.opeDesignation
        };
        this.exportList.push(exportElement);
      });
    }

    this.operationTableDataSource.dataSelection = [];
  }

  public exportTable(): void {
    if (!!this.operationTableDataSource && !!this.componentData) {
      this.exportService.toExcel(this.exportList, this.resultsTableExportName, this.componentData.componentId);
    } else {
      super.throwUnboundLocalError('exportTable', 'this.resultsTable');
    }
  }
}
