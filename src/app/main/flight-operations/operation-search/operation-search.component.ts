import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { ComponentConstants } from '../../../shared/constants/component-constants';
import { ComponentOpenMode } from '../../../shared/enums/component-open-mode.enum';
import { ConfirmationService } from '../../../shared/services/confirmation.service';
import { ExportService } from '../../../shared/services/export.service';
import { FavoriteService } from '../../../shared/services/favorite.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { MessageService } from '../../../shared/services/message.service';
import { SerializationService } from '../../../shared/services/serialization.service';
import { TabService } from '../../../shared/services/tab.service';
import { BidoOperationDTOId } from '../../../shared/types/api-types/bido-operation-dto-id.interface';
import { BidoOperationDTO } from '../../../shared/types/api-types/bido-operation-dto.interface';
import { SearchResultsDTO } from '../../../shared/types/api-types/search-results-dto.interface';
import { PageComponent } from '../../../shared/types/page-component';
import { PageComponentData } from '../../../shared/types/page-component-data.interface';
import { TableColumn } from '../../../shared/types/table-column.interface';
import { DTOUtils } from '../../../shared/utils/dto-utils';

import { OperationSearchService } from './operation-search.service';

interface OperationRow {
  operationCode?: string | '';
  operationName?: string | '';
  operationDescription?: string | '';
}

@Component({
  selector: 'aw-operation-search',
  styleUrls: ['./operation-search.component.scss'],
  templateUrl: './operation-search.component.html'
})
export class OperationSearchComponent extends PageComponent<PageComponentData> implements OnInit {
  private static readonly RESULTS_TABLE_EXPORT_NAME: string = 'operation-list';

  public isNew: boolean;
  public filteredRowsNb: number;
  public resultsTable: SearchResultsDTO<OperationRow>;
  public resultsTableCols: TableColumn[];
  public selectedOperation: OperationRow[];
  public isNavigationOverlayVisible: boolean;

  public currentOperation: OperationRow | undefined;
  public currentOperationIndex: number | undefined;
  public operationDialogOpenMode: ComponentOpenMode;
  public showOperationDialog: boolean;

  public operationAdded: OperationRow[];
  public isLoading: boolean;

  public databaseData: OperationRow[];

  /* HTML references ***********************************************************/

  @ViewChild('resultsContainerAnchor')
  public resultsContainerAnchor: ElementRef;

  public showSaveSpinner: boolean;

  public constructor(
    favoriteService: FavoriteService,
    loaderService: LoaderService,
    messageService: MessageService,
    serializationService: SerializationService,
    tabService: TabService,
    private readonly operationSearchService: OperationSearchService,
    private readonly confirmationService: ConfirmationService,
    private readonly exportService: ExportService
  ) {
    super(ComponentOpenMode.Write, favoriteService, loaderService, messageService, serializationService, tabService);

    this.filteredRowsNb = 0;
    this.resultsTable = { list: [], moreResults: false };
    this.selectedOperation = [];
    this.isNavigationOverlayVisible = false;

    this.currentOperation = undefined;
    this.currentOperationIndex = -1;
    this.operationDialogOpenMode = ComponentOpenMode.Read;
    this.showOperationDialog = false;
    this.isNew = false;
    this.isLoading = false;
    this.operationAdded = [];

    this.databaseData = [];

    this.resultsTableCols = [
      { field: 'operationCode', alignment: 'center' },
      { field: 'operationName', alignment: 'center' },
      { field: 'operationDescription', alignment: 'center' }
    ];
  }

  public getComponentName(): string {
    return ComponentConstants.FLI_OPERATION_SEARCH;
  }

  public ngOnInit(): void {
    super.ngOnInit();
    this.search();

    this.displayComponentContext('global.search', true);
  }

  public deleteOperation(): void {
    if (this.selectedOperation.length > 0) {
      this.confirmationService.confirmDelete({
        messageKey: 'global.deleteConfirmationMsg',
        accept: () => {
          const selectedBireOperationDTOIdInAddedList = new Array<BidoOperationDTOId>();
          const selectedBireOperationDTOIdInDatabase = new Array<BidoOperationDTOId>();
          this.selectedOperation.forEach((operation) => {
            if (operation) {
              const bireOperationDTOId: BidoOperationDTOId = {
                operationCode: operation.operationCode
              };
              const inAddedList = this.operationAdded.some((op) => op.operationCode === operation.operationCode);
              if (inAddedList) {
                selectedBireOperationDTOIdInAddedList.push(bireOperationDTOId);
                this.operationAdded = this.operationAdded.filter((op) => op.operationCode !== operation.operationCode);
              } else {
                selectedBireOperationDTOIdInDatabase.push(bireOperationDTOId);
                this.databaseData = this.databaseData.filter((op) => op.operationCode !== operation.operationCode);
              }

              this.resultsTable.list = this.resultsTable.list.filter(
                (op) => op.operationCode !== operation.operationCode
              );

              this.selectedOperation = [];
            }
          });
          if (selectedBireOperationDTOIdInDatabase.length > 0) {
            this.operationSearchService.removeBidoOperation(selectedBireOperationDTOIdInDatabase).subscribe(
              (result) => {
                this.messageService.showSuccessMessage('global.deleteSuccessMsg');
                // this.search();
                this.selectedOperation = [];
              },
              () => {
                this.messageService.showErrorMessage('global.deleteErrorMsg');
              }
            );
          }
        }
      });
    }
  }

  public exportTable(): void {
    this.exportService.toExcel(
      this.databaseData,
      OperationSearchComponent.RESULTS_TABLE_EXPORT_NAME,
      this.componentData.componentId
    );
  }

  // tslint:disable-next-line:no-any
  public onFilter(event: any): void {
    this.filteredRowsNb = event.filteredValue.length;
  }

  public createOperation(): void {
    this.currentOperation = undefined;
    this.operationDialogOpenMode = ComponentOpenMode.Create;
    this.showOperationDialog = true;
    this.currentOperationIndex = undefined;
  }

  public openOperationLink(object: OperationRow): void {
    this.currentOperation = object;
    this.currentOperationIndex = undefined;
    this.operationDialogOpenMode = ComponentOpenMode.Read;
    this.showOperationDialog = true;
  }

  public openOperation(): void {
    if (this.selectedOperation.length === 1) {
      this.currentOperation = this.selectedOperation[0];
      this.currentOperationIndex = undefined;
      this.operationDialogOpenMode = ComponentOpenMode.Read;
      this.showOperationDialog = true;
    }
  }

  public editOperation(): void {
    this.currentOperation = { ...this.selectedOperation[0] };
    if (!!this.currentOperation) {
      this.currentOperationIndex = this.resultsTable.list.findIndex((operation) => {
        return DTOUtils.equalsBidoOperationDTO(operation, this.currentOperation);
      });
    }
    this.operationDialogOpenMode = ComponentOpenMode.Write;
    this.showOperationDialog = true;
  }

  public onAddOperation(operation: OperationRow): void {
    if (!!operation) {
      const operationCodeExists = this.resultsTable.list.some((op) => op.operationCode === operation.operationCode);
      if (
        this.currentOperationIndex !== null &&
        this.currentOperationIndex !== undefined &&
        this.currentOperationIndex !== -1
      ) {
        // edit mode
        const indexInTable = this.resultsTable.list.findIndex((op) => op.operationCode === operation.operationCode);
        this.resultsTable.list[indexInTable] = operation;

        const inAddedList = this.operationAdded.some((op) => op.operationCode === operation.operationCode);
        if (inAddedList) {
          const indexInAddedList = this.operationAdded.findIndex((op) => op.operationCode === operation.operationCode);
          this.operationAdded[indexInAddedList] = operation;
        } else {
          this.operationAdded.push(operation);
        }
      } else {
        // creation mode
        if (operationCodeExists) {
          this.messageService.showWarningMessage(this.getTranslateKey('warningOnOperationExists'));
        } else {
          this.resultsTable.list.push(operation);
          this.operationAdded.push(operation);
        }
      }
    }
    this.selectedOperation = [];
  }

  public saveOperation(): void {
    this.showSaveSpinner = true;
    this.operationSearchService.saveFlightOperation(this.operationAdded).subscribe(
      (result) => {
        this.messageService.showSuccessMessage(this.getTranslateKey('successOnSave'));
        this.search();
        this.operationAdded = [];
        this.currentOperationIndex = -1;
        this.selectedOperation = [];
        this.showSaveSpinner = false;
      },
      (error) => {
        this.messageService.showErrorMessage(this.getTranslateKey('errorOnSave'));
        this.showSaveSpinner = false;
      }
    );
  }

  public search(): void {
    this.isLoading = true;
    super.scrollToAnchor(this.resultsContainerAnchor);
    this.operationSearchService.findBidoOperationsBySearchCriteria().subscribe((result) => {
      this.isLoading = false;
      this.setResultsTable(result);
    });
  }

  private setResultsTable(result: SearchResultsDTO<BidoOperationDTO>): void {
    if (!!result) {
      this.databaseData = [];
      this.resultsTable.moreResults = result.moreResults;
      this.resultsTable.list = result.list.map((operation) => {
        const operationRow: OperationRow = {
          operationCode: operation.operationCode,
          operationName: operation.operationName,
          operationDescription: operation.operationDescription
        };
        this.databaseData.push(operationRow);

        return operationRow;
      });

      this.filteredRowsNb = this.resultsTable.list.length;
    }

    this.selectedOperation = [];
  }

  public reloadOperation(): void {
    this.search();
    this.operationAdded = [];
    this.currentOperationIndex = -1;
    this.selectedOperation = [];
  }
}
